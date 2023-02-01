import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestMovies: any = [];
  popularMovies: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('now_playing').subscribe((movies: any) => {
      this.latestMovies = movies?.results;
    });

    this.moviesService.getMovies('top_rated').subscribe((movies: any) => {
      this.popularMovies = movies?.results;
    });
  }
}
