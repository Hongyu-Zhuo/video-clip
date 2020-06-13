import { Component, OnInit, ViewContainerRef, ElementRef, Renderer2, NgZone, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vc-timeline-ruler',
  templateUrl: './timeline-ruler.component.html',
  styleUrls: ['./timeline-ruler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineRulerComponent implements OnInit, AfterViewInit {

  unsubscribe$ = new Subject();
  @ViewChild('ruler', { static: true })
  private readonly ruler!: ElementRef<HTMLCanvasElement>;

  @Input()
  set timelineWidth(obs: Observable<DOMRect>) {
    if (!obs) return;
    obs.pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
      this._width = (value.width) * window.devicePixelRatio;
      console.log(this.ruler);
      
      this.draw();
      this.cdr.markForCheck();
      console.log(this.width);
    });
  }

  @Input()
  leftOffset = 0;

  private _width = 0;
  private _height = 30 * window.devicePixelRatio;
  ctx!:CanvasRenderingContext2D;

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private render: Renderer2,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    console.log('init');
  }
  ngAfterViewInit() {
    console.log('view init');
    
    this.ctx = this.ruler.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.init()
  }
  get width(): number {
    return this._width;
  }
  get height() {
    return this._height;
  }
  init() {
    // this.draw();
  }
  draw() {
    console.log(this.ctx.beginPath);
    this.ctx.strokeStyle = 'rgba(255,255,255, .25)';
    this.ctx.beginPath();
    this.ctx.moveTo(30, 0);
    this.ctx.lineTo(30, 30);
    this.ctx.stroke();

  }

}
