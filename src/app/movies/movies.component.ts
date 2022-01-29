import {Component, OnInit} from '@angular/core';
import {Movie} from '../model/movie';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['../app.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie?: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  constructor(private movieService: MovieService) {
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  ngOnInit() {
    this.getMovies();
  }

}
