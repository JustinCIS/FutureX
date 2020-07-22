import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';


const routes: Routes = [
  { path: 'fx-movies', component: MovieGridComponent },
  { path: '',   redirectTo: '/fx-movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
