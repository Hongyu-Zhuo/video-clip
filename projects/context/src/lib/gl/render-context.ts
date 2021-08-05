import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import identityVert from '../shaders/identity.vert';
import { RendererCache } from './renderer-cache';

export function createGlProgram(
  gl: WebGLRenderingContext,
  vertShader: WebGLShader | null,
  fragShader: WebGLShader | null
): WebGLProgram | null {
  const program = gl.createProgram();
  if (program === null) {
    // see below
    return program;
  }
  if (vertShader !== null) {
    gl.attachShader(program, vertShader);
  }
  if (fragShader !== null) {
    gl.attachShader(program, fragShader);
  }

  gl.bindAttribLocation(program, 0, 'vertexPos');
  gl.bindAttribLocation(program, 1, 'vertexUV');
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, WebGLRenderingContext.LINK_STATUS)) {
    throw new Error('Could not link program: ' + gl.getProgramInfoLog(program));
  }
  return program;
}

export function createGlShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (shader === null) {
    // Context is lost. The official guide says not to check for this,
    // however, shaderSource and other commands will fail if shader is null.
    // Not sure if this is a bug or not, but it happens in both Chrome and Firefox.
    return shader;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS)) {
    throw new Error(
      `Could not compile shader code '${source}': ${gl.getShaderInfoLog(shader)}`
    );
  }
  return shader;
}

export interface IEventLogger {
  logEvent: (eventType: string, eventProperties?: object) => void;
}

const FLOAT_BYTES = 4;
const SCREEN_COORD_DIMENSIONS = 2;
const TEX_COORD_DIMENSIONS = 2;
const RENDER_VERTICES = 6;
export class RenderContext {
  readonly contextRestored: Observable<void>;
  gl: WebGLRenderingContext;

  renderers: RendererCache;

  private readonly _contextRestored = new Subject<void>();
  private _identityVertexShader!: WebGLShader | null;
  private _quadBuffer!: WebGLBuffer;
  private boundProgram?: WebGLProgram;

  constructor(readonly name: string, analytics?: IEventLogger) {
    this.contextRestored = this._contextRestored.asObservable();

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    const gl = canvas.getContext('webgl', {
      depth: false,
      stencil: false,
      antialias: false,
      alpha: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
    });

    if (!gl) {
      throw new Error('Failed to create WebGL context.');
    }

    this.gl = gl;

    canvas.addEventListener(
      'webglcontextlost',
      (event: Event) => {
        // prevent default behavior, which loses the context and never gets it back
        // see https://www.khronos.org/webgl/wiki/HandlingContextLost
        event.preventDefault();
        const message = (event as WebGLContextEvent).statusMessage;
        console.warn(`Lost WebGL context: ${message}`);
        if (analytics) {
          analytics.logEvent('WebGL - Context Lost', {
            renderContext: name,
            message,
          });
        }
      },
      false
    );
    canvas.addEventListener('webglcontextrestored', () => {
      console.warn('Restored WebGL context');

      // In Chrome an icon appears when context is lost
      // which doesn't dissapear until the context is recreated
      // which also happens when the canvas is resized
      // (at least to my understanding)
      canvas.width = canvas.width - 1;
      canvas.width = canvas.width + 1;

      if (analytics) {
        analytics.logEvent('WebGL - Context Restored');
      }
      this.setupState();
      this.renderers = new RendererCache(this, this._identityVertexShader);
      this._contextRestored.next();
    });

    this.setupState();

    this.renderers = new RendererCache(this, this._identityVertexShader);
  }

  contextPromise(): Promise<void> {
    if (this.gl.isContextLost()) {
      return this.contextRestored.pipe(first()).toPromise();
    } else {
      return Promise.resolve();
    }
  }

  createProgram(
    vertShader: WebGLShader | null,
    fragShader: WebGLShader | null
  ): WebGLProgram | null {
    return createGlProgram(this.gl, vertShader, fragShader);
  }

  createShader(type: number, source: string): WebGLShader | null {
    return createGlShader(this.gl, type, source);
  }

  destroy(): void {
    this._contextRestored.complete();
    this.gl.deleteBuffer(this._quadBuffer);
    this.gl.deleteShader(this._identityVertexShader);
    this.renderers.destroy();
  }

  isContextLost(): boolean {
    return this.gl.isContextLost();
  }

  renderQuad(): void {
    this.gl.drawArrays(WebGLRenderingContext.TRIANGLES, 0, RENDER_VERTICES);
  }

  useProgram(program: WebGLProgram): void {
    if (program === this.boundProgram) {
      return;
    }
    this.gl.useProgram(program);
    this.boundProgram = program;
  }

  private setupState(): void {
    // setup blending state for premultiplied alpha
    this.gl.enable(WebGLRenderingContext.BLEND);
    this.gl.blendEquation(WebGLRenderingContext.FUNC_ADD);
    this.gl.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);

    // build quad vertex buffer
    const quadBufferData = new Float32Array([
      -1,
      -1,
      0,
      0,
      1,
      -1,
      1,
      0,
      -1,
      1,
      0,
      1,
      -1,
      1,
      0,
      1,
      1,
      -1,
      1,
      0,
      1,
      1,
      1,
      1,
    ]);
    const quadBuffer = this.gl.createBuffer();
    if (!quadBuffer) {
      throw new Error('Failed to create vertex buffer');
    }
    this._quadBuffer = quadBuffer;
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this._quadBuffer);
    this.gl.bufferData(
      WebGLRenderingContext.ARRAY_BUFFER,
      quadBufferData,
      WebGLRenderingContext.STATIC_DRAW
    );

    const vertexElemCount = SCREEN_COORD_DIMENSIONS + TEX_COORD_DIMENSIONS;
    this.gl.vertexAttribPointer(
      0,
      SCREEN_COORD_DIMENSIONS,
      WebGLRenderingContext.FLOAT,
      false,
      vertexElemCount * FLOAT_BYTES,
      0
    );
    this.gl.vertexAttribPointer(
      1,
      TEX_COORD_DIMENSIONS,
      WebGLRenderingContext.FLOAT,
      false,
      vertexElemCount * FLOAT_BYTES,
      SCREEN_COORD_DIMENSIONS * FLOAT_BYTES
    );
    this.gl.enableVertexAttribArray(0);
    this.gl.enableVertexAttribArray(1);

    this._identityVertexShader = this.createShader(
      WebGLRenderingContext.VERTEX_SHADER,
      identityVert
    );
  }
}
