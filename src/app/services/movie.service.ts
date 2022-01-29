import {Injectable} from '@angular/core';
import {Movie} from '../model/movie';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'http://localhost:8080/movies';  // URL to web api*

  constructor(private http: HttpClient) {

  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

}
