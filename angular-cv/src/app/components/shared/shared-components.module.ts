import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//primeNg
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
//components
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FloatLabelModule, InputTextModule, InputMaskModule],
  exports: [InputComponent],
})
export class SharedComponentsModule {}
