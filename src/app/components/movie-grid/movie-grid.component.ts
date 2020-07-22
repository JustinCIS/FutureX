import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MovieGridService } from 'src/app/services/movie-grid.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'fx-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Movie>;
  filterValue: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private movieGridService: MovieGridService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getMovies(){
    this.movieGridService.readCSV(environment.MOVIE_DATA)
    .pipe(
      map((csvText: string) => {
        return this.movieGridService.csvJSON(csvText);
      })
    )
    .subscribe((csvJSON: Movie[]) => {
      const cols = Object.keys(csvJSON[0]);
      this.displayedColumns = cols;
      this.dataSource = new MatTableDataSource(csvJSON);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
