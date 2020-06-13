import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vc-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('clipSpace') private clipSpace!: ElementRef<HTMLDivElement>;
  unsubscribe$ = new Subject();
  timelineWidth$: BehaviorSubject<any> = new BehaviorSubject({} as DOMRect );
  constructor() { }

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

}
