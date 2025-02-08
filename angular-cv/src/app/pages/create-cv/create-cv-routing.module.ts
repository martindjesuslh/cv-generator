import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//page
import { CreateCvPage } from './create-cv.page';

const routes: Routes = [{ path: '', component: CreateCvPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCvRoutingModule {}
