import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailedInfo: MovieDetail | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieService
        .getSpecificMovie(params['id'])
        .subscribe((movieResponse) => {
          this.detailedInfo = movieResponse;
        });
    });
  }
}
