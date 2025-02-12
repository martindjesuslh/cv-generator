import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
//utilities
import { dataTransferForm } from '@utils/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() set edit(value: boolean) {
    if (value) dataTransferForm({ form: this.myForm, obj: this.data }, 'obj');

    this.isEditMode = value;
  }

  public isEditMode: boolean = false;
  public data: Record<HeaderFields, string> = { address: '', email: '', fullName: '', phone: '' };
  public myForm: FormGroup;

  @Output() runComplete = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullName: ['Martín De Jesús Leaños Hernández', [V.required, V.minLength(3)]],
      address: ['160 Parnell St, Dublin 1, D01 CH05', [V.required, V.minLength(3)]],
      email: ['martindjesuslh@gmail.com', [V.required, V.email]],
      phone: ['857791694', [V.required, V.minLength(8), V.maxLength(12)]],
    });
  }

  handleComplete() {
    if (this.myForm.invalid) return;
    const obj = dataTransferForm({ form: this.myForm, obj: this.data }, 'form');
    this.data = obj as Record<HeaderFields, string>;
    this.runComplete.emit();
  }
}

type HeaderFields = 'address' | 'email' | 'fullName' | 'phone';
