import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, take } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: any = [];
  genreId: number | null = null;
  rowsPerPage: number[] = [4, 8, 20];

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe((genreId) => {
      if (genreId['id']) {
        this.searchMoviesByCategories(genreId['id']);
        this.genreId = genreId['id'];
      } else {
        this.searchMovies(1, 20);
      }
    });
  }

  paginate(event: any) {
    const page = event?.page + 1;
    if (this.genreId) {
      this.searchMoviesByCategories(this.genreId, page, event?.rows);
    } else {
      this.searchMovies(page, event?.rows);
    }
  }

  private searchMovies(page: any, rows: number = 20) {
    this.movieService.searchMovies(page, rows).subscribe((moviesResult) => {
      this.movies = moviesResult;
    });
  }

  private searchMoviesByCategories(
    category: any = 1,
    page: number = 1,
    rows: number = 20
  ) {
    this.movieService
      .searchMoviesByGenre(category, page, rows)
      .subscribe((moviesResult) => {
        this.movies = moviesResult;
      });
  }
}
