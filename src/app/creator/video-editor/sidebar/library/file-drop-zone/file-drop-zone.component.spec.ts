import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FileDropZoneComponent } from './file-drop-zone.component';

describe('FileDropZoneComponent', () => {
  let component: FileDropZoneComponent;
  let fixture: ComponentFixture<FileDropZoneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDropZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDropZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
