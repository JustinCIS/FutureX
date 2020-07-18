import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxMovieSearchComponent } from './fx-movie-search.component';

describe('FxMovieSearchComponent', () => {
  let component: FxMovieSearchComponent;
  let fixture: ComponentFixture<FxMovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxMovieSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxMovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
