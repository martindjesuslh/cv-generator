import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//routing
import { CreateCvRoutingModule } from './create-cv-routing.module';
//modules
import { CreateCvComponentsModule } from '@components/create-cv/create-cv-components.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
//services
import { PrintService } from '@services/print.service';
//pages
import { CreateCvPage } from './create-cv.page';

@NgModule({
  declarations: [CreateCvPage],
  imports: [CommonModule, CreateCvRoutingModule, CreateCvComponentsModule, MatButtonModule, MatIcon],
  providers: [PrintService],
})
export class CreateCvModule {}
