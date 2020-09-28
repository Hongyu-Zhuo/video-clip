import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPreviewComponent } from './asset-preview.component';

describe('AssetPreviewComponent', () => {
  let component: AssetPreviewComponent;
  let fixture: ComponentFixture<AssetPreviewComponent>;

  beforeEach(async(() => {
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
