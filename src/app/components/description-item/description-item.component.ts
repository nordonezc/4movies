import { Component, Input } from '@angular/core';
import { MovieDetail } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/base-url';

@Component({
  selector: 'app-description-item',
  templateUrl: './description-item.component.html',
  styleUrls: ['./description-item.component.scss']
})
export class DescriptionItemComponent {
  imageSize: string = IMAGE_SIZE.small;
  @Input() detailedInfo: MovieDetail | null = null;
}
