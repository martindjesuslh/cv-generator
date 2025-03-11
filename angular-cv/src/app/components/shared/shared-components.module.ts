import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNg
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
//components
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FloatLabelModule, ButtonModule, InputTextModule, TextareaModule],
  exports: [InputComponent],
})
export class SharedComponentsModule {}
