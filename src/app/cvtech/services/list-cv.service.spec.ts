import { TestBed } from '@angular/core/testing';

import { ListCVService } from './list-cv.service';

describe('ListCVService', () => {
  let service: ListCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
