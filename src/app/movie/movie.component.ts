import { Component, OnInit } from '@angular/core';
import {Movie} from '../model/movie';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';
import {Location} from '@angular/common';
import {Person} from '../model/person';
import {PersonService} from '../services/person.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['../app.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie | undefined;
  cast: Person[] = [];
  crew: Person[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private personService: PersonService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
    this.getCast();
    this.getCrew();

  }

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('movie_id')!, 10);
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  getCast(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('movie_id')!, 10);
    this.personService.getMovieCast(id)
      .subscribe(persons => this.cast = persons);
  }

  getCrew(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('movie_id')!, 10);
    this.personService.getMovieCrew(id)
      .subscribe(persons => this.crew = persons);
  }

  goBack(): void {
    this.location.back();
  }

  /**
   * return the name of the director
   */
  getDirectorName(): string {
    for (const person of this.crew) {
      if (person.job === 'Director') {
        return person.person_name;
      }
    }
    return 'Nobody apparently';
  }

}
