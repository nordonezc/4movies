import { Component, Input, OnInit } from '@angular/core';
import { ImageLocation } from '../../models/movie';
import { IMAGE_SIZE } from '../../constants/base-url';

@Component({
  selector: 'app-image-embed',
  templateUrl: './image-embed.component.html',
  styleUrls: ['./image-embed.component.scss']
})
export class ImageEmbedComponent implements OnInit {
  @Input() imageInfo: ImageLocation | null = null;
  imagePath: string = IMAGE_SIZE.small;

  constructor() {}

  ngOnInit(): void {
    this.imagePath = IMAGE_SIZE.small + this.imageInfo?.file_path;
  }
}
