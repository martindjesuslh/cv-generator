import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { AbstractControl } from '@angular/forms';
import type { MatInput } from '@angular/material/input';

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
  @Input() type: MatInput['type'] = 'text';
  @Input() buttonIconName?: string;

  @Output() clickButton = new EventEmitter<void>();

  get errorMessage(): string | null {
    return getErrorMessage(this.control);
  }

  handleChange(e: Event) {
    if (!this.control) return;

    const { value } = e.target as HTMLInputElement;
    this.control.setValue(value, { emitValue: true });
  }

  handleClickButtonEdit() {
    if (!this.clickButton.observed) return;

    this.clickButton.emit();
  }
}
