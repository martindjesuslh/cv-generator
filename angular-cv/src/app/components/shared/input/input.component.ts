import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { AbstractControl } from '@angular/forms';

import { getErrorMessage } from '@utils/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control: AbstractControl | null = null;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() buttonIconName?: string;
  @Input() helpText?: string;
  @Output() clickButton = new EventEmitter<void>();

  get errorMessage(): string | null {
    return getErrorMessage(this.control);
  }

  get className() {
    return this.control?.invalid && this.control.touched ? 'ng-invalid ng-dirty' : '';
  }

  handleChange(e: Event) {
    if (!this.control) return;

    const { value } = e.target as HTMLInputElement;
    this.control.setValue(value, { emitValue: true });
  }

  handleBlur() {
    this.control?.markAsTouched();
  }

  handleClickButtonEdit() {
    if (!this.clickButton.observed) return;

    this.clickButton.emit();
  }
}
