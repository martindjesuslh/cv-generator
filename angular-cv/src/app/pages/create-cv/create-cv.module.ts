import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//routing
import { CreateCvRoutingModule } from './create-cv-routing.module';
//modules
import { CreateCvComponentsModule } from '@components/create-cv/create-cv-components.module';
import { ButtonModule } from 'primeng/button';

//services
import { PrintService } from '@services/print.service';
//pages
import { CreateCvPage } from './create-cv.page';

@NgModule({
  declarations: [CreateCvPage],
  imports: [CommonModule, CreateCvRoutingModule, CreateCvComponentsModule, ButtonModule],
  providers: [PrintService],
})
export class CreateCvModule {}
