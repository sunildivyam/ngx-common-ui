import { TestBed } from '@angular/core/testing';

import { NgxCommonUiService } from './ngx-common-ui.service';

describe('NgxCommonUiService', () => {
  let service: NgxCommonUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCommonUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
