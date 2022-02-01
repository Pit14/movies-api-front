import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieComponent} from './movie/movie.component';
import {PersonComponent} from './person/person.component';

const routes: Routes = [
  /*{ path: 'movies', component: MoviesComponent },*/
  { path: 'home', component: HomeComponent },
  { path: 'movie/:movie_id', component: MovieComponent },
  { path: 'person/:person_id', component: PersonComponent },
  {path: 'movies', loadChildren: () =>
      import('./movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
