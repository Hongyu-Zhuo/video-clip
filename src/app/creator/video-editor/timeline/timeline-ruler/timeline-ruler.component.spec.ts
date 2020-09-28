import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRulerComponent } from './timeline-ruler.component';

describe('TimelineRulerComponent', () => {
  let component: TimelineRulerComponent;
  let fixture: ComponentFixture<TimelineRulerComponent>;

  beforeEach(async(() => {
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
