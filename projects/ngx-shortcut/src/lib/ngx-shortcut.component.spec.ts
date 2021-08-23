import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxShortcutComponent } from './ngx-shortcut.component';

describe('NgxShortcutComponent', () => {
  let component: NgxShortcutComponent;
  let fixture: ComponentFixture<NgxShortcutComponent>;

  beforeEach(waitForAsync(() => {
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
