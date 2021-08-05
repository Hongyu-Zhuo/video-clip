
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';
import { Shortcut, ShortcutBaseDirective, NgxShortcutService } from 'projects/ngx-shortcut/src/public-api';

@Component({
  selector: 'vc-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent extends ShortcutBaseDirective implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('clipSpace') private clipSpace!: ElementRef<HTMLDivElement>;
  unsubscribe$ = new Subject();
  timelineWidth$: BehaviorSubject<any> = new BehaviorSubject({} as DOMRect );
  scale = 55;
  tracks = [];
  constructor(
    protected shortService: NgxShortcutService
  )  { super(shortService) }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    this.timelineWidth$.pipe(
      takeUntil(this.unsubscribe$)
    );
    this.timelineWidth$.next(this.clipSpace.nativeElement.getBoundingClientRect());
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  @Shortcut('Control', 'c')
  doCopy(): void {
    console.log('doCopy run');

  }

  @Shortcut('Control', 'v')
  doPase() {
    console.log('doPase run');
  }
  trackBy(i: number): number {
    return i;
  }
}
