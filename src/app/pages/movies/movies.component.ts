import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: any = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.searchMovies(1, 4);
  }

  paginate(event: any) {
    console.log(event);
    this.searchMovies(event?.page + 1, event?.rows);
  }

  private searchMovies(page: any, rows: number = 20) {
    this.movieService.searchMovies(page, rows).subscribe((moviesResult) => {
      this.movies = moviesResult;
    });
  }
}
