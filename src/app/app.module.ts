import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FxMovieGridComponent } from './components/fx-movie-grid/fx-movie-grid.component';
import { FxMovieSearchComponent } from './components/fx-movie-search/fx-movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    FxMovieGridComponent,
    FxMovieSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
