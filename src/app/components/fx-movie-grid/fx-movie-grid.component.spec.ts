import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxMovieGridComponent } from './fx-movie-grid.component';

describe('FxMovieGridComponent', () => {
  let component: FxMovieGridComponent;
  let fixture: ComponentFixture<FxMovieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxMovieGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxMovieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
