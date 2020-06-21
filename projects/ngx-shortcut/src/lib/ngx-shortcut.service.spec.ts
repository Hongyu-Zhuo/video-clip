import { TestBed } from '@angular/core/testing';

import { NgxShortcutService } from './ngx-shortcut.service';

describe('NgxShortcutService', () => {
  let service: NgxShortcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxShortcutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
