import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
//pages
import { AboutPage } from './about.page';

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
