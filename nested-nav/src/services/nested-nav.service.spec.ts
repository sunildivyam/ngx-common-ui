import { TestBed } from '@angular/core/testing';

import { NestedNavService } from './nested-nav.service';

describe('NestedNavService', () => {
  let service: NestedNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
