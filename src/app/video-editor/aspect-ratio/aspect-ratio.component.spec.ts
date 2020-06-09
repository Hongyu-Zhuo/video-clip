import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectRatioComponent } from './aspect-ratio.component';

describe('AspectRatioComponent', () => {
  let component: AspectRatioComponent;
  let fixture: ComponentFixture<AspectRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
