import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortenerPageComponent } from './pages/url-shortener-page/url-shortener-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    UrlShortenerPageComponent,
    HomePageComponent
  ],
  imports: [CommonModule],
})
export class UrlShortenerModule {}
