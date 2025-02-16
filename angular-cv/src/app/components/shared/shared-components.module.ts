import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNg
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
//components
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FloatLabelModule, InputTextModule, TextareaModule],
  exports: [InputComponent],
})
export class SharedComponentsModule {}
