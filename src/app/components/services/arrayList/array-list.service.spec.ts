import { TestBed } from '@angular/core/testing';

import { ArrayListService } from './array-list.service';

describe('ArrayListService', () => {
  let service: ArrayListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
