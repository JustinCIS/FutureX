import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MovieGridService } from 'src/app/services/movie-grid.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface Movie {
  Rank: number;
  Title: string;
  Genre: string[];
  Description: string;
  Director: string; 
  Actors: string[];
  Year: number;
  "Runtime (Minutes)": number;
  Rating: number;
  Votes: number;
  "Revenue (Millions)": number;
  Metascore: number;
}

@Component({
  selector: 'fx-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss']
})
export class MovieGridComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Movie>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private movieGridService: MovieGridService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getMovies(){
    this.movieGridService.readCSV(environment.MOVIE_DATA)
    .pipe(
      map(k => {
        return this.movieGridService.csvJSON(k);
      })
    )
    .subscribe(csv => {
      const cols = Object.keys(csv[0]);
      this.displayedColumns = cols;
      this.dataSource = new MatTableDataSource(csv);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
