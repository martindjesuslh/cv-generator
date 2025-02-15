import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//config
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//services
import { NavigateService } from '@services/navigate.service';
//theme
import provideTheme from '@styles/primeNg';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideAnimationsAsync(), provideTheme, NavigateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
