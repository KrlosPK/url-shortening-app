import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { HomePageComponent } from './url-shortener/pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '404', component: Error404PageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
