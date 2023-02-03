import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import {
  Credits,
  ImageMovie,
  InfoVideo,
  MovieDetail
} from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  detailedInfo: MovieDetail | null = null;
  infoVideo: InfoVideo | null = null;
  imageInfo: ImageMovie | null = null;
  creditsInfo: Credits | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.route.params.pipe(first()).subscribe((params) => {
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

      this.movieService.getCredits(params['id']).subscribe((crewReponse) => {
        this.creditsInfo = crewReponse;
      });
    });
  }
}
