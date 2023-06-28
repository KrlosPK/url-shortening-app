import { Component, Input } from '@angular/core';
import { Url } from '../../interfaces/url.interface';

@Component({
  selector: 'url-shortener-shortened-url',
  templateUrl: './shortened-url.component.html',
  styles: [],
})
export class ShortenedUrlComponent {
  public buttonTexts: string[] = [];

  @Input()
  public shortenedUrl: string[] = [];
  @Input()
  public userUrls: Url[] = [];

  copyToClipboard(text: HTMLParagraphElement, index: number): void {
    navigator.clipboard.writeText(text.innerHTML.trim());
    this.userUrls[index].buttonText = 'Copied!';

    setTimeout(() => {
      this.userUrls[index].buttonText = 'Copy';
    }, 3500);
  }
}
