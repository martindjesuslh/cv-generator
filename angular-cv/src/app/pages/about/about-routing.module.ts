import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
