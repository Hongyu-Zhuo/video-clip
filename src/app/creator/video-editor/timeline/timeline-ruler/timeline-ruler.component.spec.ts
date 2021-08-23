import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimelineRulerComponent } from './timeline-ruler.component';

describe('TimelineRulerComponent', () => {
  let component: TimelineRulerComponent;
  let fixture: ComponentFixture<TimelineRulerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineRulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineRulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
