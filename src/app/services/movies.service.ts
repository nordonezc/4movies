import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Credits,
  ImageMovie,
  InfoVideo,
  MovieDetail,
  MovieDto
} from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3/';
  movies: string = 'movie/';
  videos: string = '/videos';
  images: string = '/images';
  credits: string = '/credits';
  apiKey: string = '?api_key=';

  constructor(private http: HttpClient) {}

  searchMovies(page: number = 1, size: number = 20) {
    return this.http
      .get<MovieDto>(
        this.baseUrl + this.movies + `popular${this.apiKey}&page=${page}`
      )
      .pipe(
        switchMap((movies) => {
          return of(movies.results.slice(0, size));
        })
      );
  }

  getSpecificMovie(idMovie: number = 250) {
    return this.http.get<MovieDetail>(
      this.baseUrl + this.movies + idMovie + this.apiKey
    );
  }

  getMovieImages(idMovie: number = 250) {
    return this.http.get<ImageMovie>(
      this.baseUrl + this.movies + idMovie + this.images + this.apiKey
    );
  }

  getSpecificVideo(idMovie: number = 250) {
    return this.http.get<InfoVideo>(
      this.baseUrl + this.movies + idMovie + this.videos + this.apiKey
    );
  }

  getCredits(idMovie: number = 250) {
    return this.http.get<Credits>(
      this.baseUrl + this.movies + idMovie + this.credits + this.apiKey
    );
  }

  getMovies(type: String = 'popular', count: number = 12) {
    return this.http
      .get<MovieDto>(this.baseUrl + this.movies + type + this.apiKey)
      .pipe(
        switchMap((movies) => {
          return of(movies.results.slice(0, count));
        })
      );
  }
}
