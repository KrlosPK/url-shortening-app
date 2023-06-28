import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { FormComponent } from './components/form/form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShortenedUrlComponent } from './components/shortened-url/shortened-url.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    FormComponent,
    HomePageComponent,
    ShortenedUrlComponent,
    WelcomeComponent,
    MoreInfoComponent,
    CardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class UrlShortenerModule {}
