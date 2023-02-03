import { Component, Input } from '@angular/core';
import { Cast } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/base-url';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  @Input() infoCard: Cast[] | undefined = undefined;
  imageSize: string = IMAGE_SIZE.small;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 5
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() {}

  ngOnInit() {}
}
