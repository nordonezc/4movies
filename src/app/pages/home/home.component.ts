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
  upcomingMovies: any = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('now_playing').subscribe((movies) => {
      this.latestMovies = movies;
    });

    this.moviesService.getMovies('top_rated', 6).subscribe((movies) => {
      this.popularMovies = movies;
    });

    this.moviesService.getMovies('upcoming', 6).subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }
}
