import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AspectRatioContainerComponent } from './aspect-ratio-container.component';

describe('AspectRatioContainerComponent', () => {
  let component: AspectRatioContainerComponent;
  let fixture: ComponentFixture<AspectRatioContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectRatioContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectRatioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
