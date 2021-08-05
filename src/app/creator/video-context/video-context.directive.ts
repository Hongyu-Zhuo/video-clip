import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[vcVideoContext]'
})
export class VideoContextDirective implements AfterViewInit {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    const bufferCanvas = this.renderer.createElement('canvas') as HTMLCanvasElement;
    this.renderer.setStyle(bufferCanvas, 'width', '100%');
    this.renderer.setStyle(bufferCanvas, 'height', '100%');
    this.renderer.appendChild(this.elementRef.nativeElement, bufferCanvas);
  }

  initCanvas(): void {

    const bufferCanvas = this.renderer.createElement('canvas') as HTMLCanvasElement;
    this.renderer.setStyle(bufferCanvas, 'width', '100%');
    this.renderer.setStyle(bufferCanvas, 'height', '100%');
  }

}
