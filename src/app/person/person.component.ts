import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../services/person.service';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  cast: Person[] = [];
  crew: Person[] = [];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPersonCast();
    this.getPersonCrew();
  }

  getPersonCast(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('person_id')!, 10);
    this.personService.getPersonCast(id)
      .subscribe(person => this.cast = person);
  }

  getPersonCrew(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('person_id')!, 10);
    this.personService.getPersonCrew(id)
      .subscribe(person => this.crew = person);
  }

}
