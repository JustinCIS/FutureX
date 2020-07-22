import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fx-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitFilter(event) {
    this.search.emit(event);
  }

}
