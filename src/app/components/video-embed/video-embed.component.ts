import { MapType } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss']
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;
  baseUrl = {
    youtube: 'https://www.youtube.com/embed/',
    vimeo: 'https://player.vimeo.com/video/'
  };
  safeUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'Vimeo':
        this.safeUrl = this.getSafeUrl(this.baseUrl.vimeo);
        break;
      default:
        this.safeUrl = this.getSafeUrl(this.baseUrl.youtube);
        break;
    }
  }

  getSafeUrl(baseUrl: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(baseUrl + this.key);
  }
}
