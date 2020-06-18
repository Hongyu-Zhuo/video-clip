import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDndComponent } from './ngx-dnd.component';

describe('NgxDndComponent', () => {
  let component: NgxDndComponent;
  let fixture: ComponentFixture<NgxDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
