import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageMovie, InfoVideo, MovieDetail } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailedInfo: MovieDetail | null = null;
  infoVideo: InfoVideo | null = null;
  imageInfo: ImageMovie | null = null;

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

      this.movieService
        .getSpecificVideo(params['id'])
        .subscribe((videoInfo) => {
          this.infoVideo = videoInfo;
        });

      this.movieService.getMovieImages(params['id']).subscribe((imageVideo) => {
        this.imageInfo = imageVideo;
      });
    });
  }
}
