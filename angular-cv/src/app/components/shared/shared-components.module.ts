import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNg
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
//components
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, InputTextModule, FloatLabelModule],
  exports: [InputComponent],
})
export class SharedComponentsModule {}
