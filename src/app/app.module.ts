import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    UrlShortenerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
