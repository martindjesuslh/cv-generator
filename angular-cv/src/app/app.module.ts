import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//config
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//theme
import provideTheme from '@styles/primeNg';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideAnimationsAsync(), provideTheme],
  bootstrap: [AppComponent],
})
export class AppModule {}
