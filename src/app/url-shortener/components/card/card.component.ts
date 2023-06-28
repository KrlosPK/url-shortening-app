import { Component, Input } from '@angular/core';

@Component({
  selector: 'url-shortener-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent {
  @Input()
  public src: string = './assets/images/icon-brand-recognition.svg';
  @Input()
  public alt: string = 'alternative image';
  @Input()
  public title: string = 'Brand Recognition';
  @Input()
  public text: string =
    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.";
}
