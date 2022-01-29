import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../model/movie';
import {Person} from '../model/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsCastUrl = 'http://localhost:8080/movie/cast';
  private personsCrewUrl = 'http://localhost:8080/movie/crew';
  private personCastUrl = 'http://localhost:8080/person/cast';
  private personCrewUrl = 'http://localhost:8080/person/crew';

  constructor(private http: HttpClient) {

  }

  getMovieCast(id: number): Observable<Person[]> {
    const url = `${this.personsCastUrl}/${id}`;
    return this.http.get<Person[]>(url);
  }

  getMovieCrew(id: number): Observable<Person[]> {
    const url = `${this.personsCrewUrl}/${id}`;
    return this.http.get<Person[]>(url);
  }

  getPersonCast(id: number): Observable<Person[]> {
    const url = `${this.personCastUrl}/${id}`;
    return this.http.get<Person[]>(url);
  }

  getPersonCrew(id: number): Observable<Person[]> {
    const url = `${this.personCrewUrl}/${id}`;
    return this.http.get<Person[]>(url);
  }
}
