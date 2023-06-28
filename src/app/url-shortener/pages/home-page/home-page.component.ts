import { Component } from '@angular/core';
import { Url } from '../../interfaces/url.interface';

@Component({
  selector: 'url-shortener-home-page',
  templateUrl: './home-page.component.html',
  styles: [],
})
export class HomePageComponent {
  public shortenUrls: Url[] = [];

  onShortenUrl(event: Url): void {
    this.shortenUrls.push(event);
  }
}
