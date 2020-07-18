import { TestBed } from '@angular/core/testing';

import { MovieGridService } from './movie-grid.service';

describe('MovieGridService', () => {
  let service: MovieGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
