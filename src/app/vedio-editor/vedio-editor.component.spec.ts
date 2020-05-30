import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioEditorComponent } from './vedio-editor.component';

describe('VedioEditorComponent', () => {
  let component: VedioEditorComponent;
  let fixture: ComponentFixture<VedioEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
