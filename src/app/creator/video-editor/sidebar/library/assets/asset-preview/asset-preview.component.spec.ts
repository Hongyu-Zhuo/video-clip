import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssetPreviewComponent } from './asset-preview.component';

describe('AssetPreviewComponent', () => {
  let component: AssetPreviewComponent;
  let fixture: ComponentFixture<AssetPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
