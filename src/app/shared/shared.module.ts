import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { NavitemComponent } from './components/navitem/navitem.component';
import { ButtonComponent } from './components/button/button.component';
import { ResponsiveNavComponent } from './components/responsive-nav/responsive-nav.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, Error404PageComponent, NavitemComponent, ButtonComponent, ResponsiveNavComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
