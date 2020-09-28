import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTileWrapperComponent } from './asset-tile-wrapper.component';

describe('AssetTileWrapperComponent', () => {
  let component: AssetTileWrapperComponent;
  let fixture: ComponentFixture<AssetTileWrapperComponent>;

  beforeEach(async(() => {
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
