import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from '../../models/movie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  genres: Genre | null = null;

  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.movieService.getGenres().subscribe((genresResponse) => {
      this.genres = genresResponse;
    });
  }
}
