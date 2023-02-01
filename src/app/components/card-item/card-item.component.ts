import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { IMAGE_SIZE } from '../../constants/base-url';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() itemInfo: Movie | any = {};
  readonly imageSize = IMAGE_SIZE;
}
