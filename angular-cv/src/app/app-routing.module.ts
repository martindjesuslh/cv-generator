import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modules
import { HomeModule } from './pages/home/home.module';
import { CreateCvModule } from './pages/create-cv/create-cv.module';
import { AboutModule } from './pages/about/about.module';
import { NotFoundPage } from './pages/not-found/not-found.page';
//pages

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => HomeModule),
  },
  {
    path: 'create-cv',
    loadChildren: () => import('./pages/create-cv/create-cv.module').then(m => CreateCvModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => AboutModule),
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
