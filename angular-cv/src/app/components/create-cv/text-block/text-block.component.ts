import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators as V } from '@angular/forms';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrl: './text-block.component.css',
})
export class TextBlockComponent {
  @Input() set edit(value: boolean) {
    this.isEditMode = value;
  }
  //controls
  public isEditMode: boolean = false;
  public descriptionForm = new FormControl(null, [V.required, V.minLength(20)]);
  //data
  public description = '';

  @Output() runComplete = new EventEmitter<void>();

  handleComplete() {
    if (this.descriptionForm.invalid) return;

    this.description = `${this.descriptionForm.value}`;

    this.runComplete.emit();
  }
}
