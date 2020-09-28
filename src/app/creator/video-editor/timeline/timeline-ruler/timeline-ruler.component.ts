import { Component, OnInit, ViewContainerRef, ElementRef, Renderer2, NgZone, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'vc-timeline-ruler',
  templateUrl: './timeline-ruler.component.html',
  styleUrls: ['./timeline-ruler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineRulerComponent implements OnInit, AfterViewInit {

  unsubscribe$ = new Subject();
  private readonly resize$: Subject<void> = new Subject();
  @ViewChild('ruler', { static: true })
  private readonly ruler!: ElementRef<HTMLCanvasElement>;
  private _leftOffset = 0;
  tickSpacing!: number;
  private _scale!: number;

  @Input()
  set timelineWidth(value: number) {
    if (!(value)) return;
    this._width = value;
    this.resize$.next();
    // this.cdr.detectChanges();
  }

  @Input()
  set leftOffset(value: number) {
    this._leftOffset = 0;
    this.resize$.next();
  }

  @Input()
  set scale(value: number) {
    this._scale = value;
    this.tickSpacing = this.calcTickSpacing();
    this.draw();
    console.log(value);

  }

  private _width = 0;
  private _height = 30 * window.devicePixelRatio;

  private step = 100;
  private readonly stepSafetyWidth = 100;
  private readonly leftPadding = 30;
  private readonly renderBoundsLeft = -50;

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private render: Renderer2,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.init()
    this.resize$.pipe(
      debounceTime(300),
      takeUntil(this.unsubscribe$)
    ).subscribe(() => {
      this.draw();
    });
    // this.draw();
  }
  get width(): number {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get ctx(): CanvasRenderingContext2D {
    return this.ruler?.nativeElement.getContext('2d') as CanvasRenderingContext2D;
  }
  init() {
    // this.draw();
    // const scale = 55 + ( 55 - )
  }
  draw() {
    if (!this.ctx) return;
    if (!this.width || !this._scale) return;
    console.log(this.ctx);
    const timeTextFontSize = 14;
    const timeTextLeftPadding = 5;
    const timeTextY = 19;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = 'rgba(255,255,255, .25)';
    this.ctx.fillStyle = 'rgba(255,255,255,0.25)';
    this.ctx.font = `bold ${timeTextFontSize * window.devicePixelRatio}px 'Source Sans Pro'`;

    for (let i = 0; i < this.width; i += this.tickSpacing) {
      const tickX = this.timeToPx(i);
      // const this.
       // No sense in drawing outside the visible range
       if (tickX > this._width) {
        break;
      }
      if (tickX < this.renderBoundsLeft) {
          continue;
      }
      this.ctx.beginPath();
      this.ctx.moveTo(tickX, 0);
      this.ctx.lineTo(tickX, this.height);

      // this.ctx.fillText(this.formatTime(i), this.leftOffset + i + timeTextLeftPadding, this.height )
      this.ctx.fillText(
        this.formatTime(i),
        tickX + timeTextLeftPadding * window.devicePixelRatio,
        timeTextY * window.devicePixelRatio
      );
      this.ctx.stroke();
    }
  }
  timeToPx(time: number): number {
      return (time * this._scale - this._leftOffset + this.leftPadding) * window.devicePixelRatio;
  }
  calcTickSpacing(): number {
    const safetyWidth = this.stepSafetyWidth * window.devicePixelRatio;
    let stepSeconds = 1;
    while( ( stepSeconds * this._scale + this._leftOffset ) * window.devicePixelRatio <= safetyWidth ) {
      stepSeconds ++;
    }
    return stepSeconds;
  }
  formatTime(time: number): string {
    const secondPerHours = 3600;
    const secondPerMinutes = 60;
    const h = Math.floor(time / secondPerHours);
    const m = Math.floor((time % secondPerHours) / secondPerMinutes);
    const s = Math.floor((time % secondPerHours) % secondPerMinutes);
    if ( h + m + s === 0 ) {
      return '0';
    }
    const hours = h > 0 ? `${h}:` : '';
    const minutes = `${m}`.padStart(2, '0') + ':';
    const seconds = `${s}`.padStart(2, '0');
    return `${hours}${minutes}${seconds}`

  }

}
