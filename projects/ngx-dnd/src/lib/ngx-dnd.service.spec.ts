import { TestBed } from '@angular/core/testing';

import { NgxDndService } from './ngx-dnd.service';

describe('NgxDndService', () => {
  let service: NgxDndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
