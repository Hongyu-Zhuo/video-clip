import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxShortcutComponent } from './ngx-shortcut.component';

describe('NgxShortcutComponent', () => {
  let component: NgxShortcutComponent;
  let fixture: ComponentFixture<NgxShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
