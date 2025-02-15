import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
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

  //controls
  public isEditMode: boolean = false;
  public myForm: FormGroup;
  //display
  public data: Record<HeaderFields, string> = { address: '', email: '', fullName: '', phone: '' };

  @Output() runComplete = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fullName: [null, [V.required, V.minLength(3)]],
      address: [null, [V.required, V.minLength(3)]],
      email: [null, [V.required, V.email]],
      phone: [null, [V.required, V.minLength(8), V.maxLength(12)]],
    });
  }

  handleComplete() {
    if (this.myForm.invalid) return;

    const obj = dataTransferForm({ form: this.myForm, obj: this.data }, 'form');
    console.log({ obj });

    this.data = obj as Record<HeaderFields, string>;
    this.isEditMode = false;

    this.runComplete.emit();
  }

  handlePatch() {
    this.myForm.setValue(templateData);
    //dataTransferForm({ form: this.myForm, obj: templateData }, 'obj');
  }
}

const templateData: Record<HeaderFields, string> = {
  fullName: 'TestName',
  address: 'AddressTest',
  email: 'emailTest@gmail.com',
  phone: '100069090',
};
type HeaderFields = 'address' | 'email' | 'fullName' | 'phone';
