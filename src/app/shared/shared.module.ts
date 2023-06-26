import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { ButtonComponent } from './components/button/button.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavitemComponent } from './components/navitem/navitem.component';
import { ResponsiveNavComponent } from './components/responsive-nav/responsive-nav.component';

@NgModule({
  declarations: [
    ButtonComponent,
    Error404PageComponent,
    FooterComponent,
    NavbarComponent,
    NavitemComponent,
    ResponsiveNavComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    ButtonComponent,
    FooterComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
