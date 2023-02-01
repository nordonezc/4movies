import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  movies: string = 'movie/';
  apiKey: string = '?api_key=';

  constructor(private http: HttpClient) {}

  getMovies(type: String = 'popular') {
    return this.http.get(this.baseUrl + this.movies + type + this.apiKey);
  }
}
