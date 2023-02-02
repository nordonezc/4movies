import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/base-url';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class SliderComponent {
  @Input() items: Movie[] = [];
  @Input() isSlider: boolean = true;
  currentSlideIndex: number = 0;
  imageSizes = IMAGE_SIZE;

  ngOnInit(): void {
    if (this.isSlider) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 4000);
    }
  }
}
