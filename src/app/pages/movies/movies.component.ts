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
  rows: number = 20;
  page: number = 1;
  search: any | null = null;

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
        this.searchMovies(this.page, this.rows);
      }
    });
  }

  paginate(event: any) {
    this.page = event.page + 1;
    this.rows = event.rows;
    if (this.genreId) {
      this.searchMoviesByCategories(this.genreId, this.page, this.rows);
    } else {
      this.searchChange();
    }
  }

  searchChange() {
    if (this.search) {
      this.movieService
        .findMovies(this.search, this.page, this.rows)
        .subscribe((foundMovies) => {
          this.movies = foundMovies;
        });
    } else {
      this.searchMovies(this.page, this.rows);
    }
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

  private searchMovies(page: any, rows: number = 20) {
    this.movieService.searchMovies(page, rows).subscribe((moviesResult) => {
      this.movies = moviesResult;
    });
  }
}
