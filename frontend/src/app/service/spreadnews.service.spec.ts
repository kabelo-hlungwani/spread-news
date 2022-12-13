import { TestBed } from '@angular/core/testing';

import { SpreadnewsService } from './spreadnews.service';

describe('SpreadnewsService', () => {
  let service: SpreadnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpreadnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
