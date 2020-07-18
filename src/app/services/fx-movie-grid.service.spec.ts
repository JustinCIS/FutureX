import { TestBed } from '@angular/core/testing';

import { FxMovieGridService } from './fx-movie-grid.service';

describe('FxMovieGridService', () => {
  let service: FxMovieGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FxMovieGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
