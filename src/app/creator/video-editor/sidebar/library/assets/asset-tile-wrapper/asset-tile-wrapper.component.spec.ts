import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AssetTileWrapperComponent } from './asset-tile-wrapper.component';

describe('AssetTileWrapperComponent', () => {
  let component: AssetTileWrapperComponent;
  let fixture: ComponentFixture<AssetTileWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTileWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTileWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
