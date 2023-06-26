import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [HomePageComponent, WelcomeComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
})
export class UrlShortenerModule {}
