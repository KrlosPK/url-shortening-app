import { Component } from '@angular/core';

interface Card {
  alt: string;
  src: string;
  text: string;
  title: string;
}

@Component({
  selector: 'url-shortener-more-info',
  templateUrl: './more-info.component.html',
  styles: [
    `
      @media screen and (min-width: 1024px) {
        url-shortener-card:nth-child(2) {
          position: relative;
          translate: 0 -32px;
        }
        url-shortener-card:nth-child(4) {
          position: relative;
          translate: 0 32px;
        }
      }
    `,
  ],
})
export class MoreInfoComponent {
  public cards: Card[] = [
    {
      title: 'Brand Recognition',
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      alt: 'Brand Recognition',
      src: './assets/images/icon-brand-recognition.svg',
    },
    {
      title: 'Detailed Records',
      text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content.',
      alt: 'Detailed Records',
      src: './assets/images/icon-detailed-records.svg',
    },
    {
      title: 'Fully Customizable',
      text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      alt: 'Fully Customizable',
      src: './assets/images/icon-fully-customizable.svg',
    },
  ];
}
