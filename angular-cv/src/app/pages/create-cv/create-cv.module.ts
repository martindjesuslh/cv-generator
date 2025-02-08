import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCvRoutingModule } from './create-cv-routing.module';
//pages
import { CreateCvPage } from './create-cv.page';

@NgModule({
  declarations: [CreateCvPage],
  imports: [CommonModule, CreateCvRoutingModule],
})
export class CreateCvModule {}
