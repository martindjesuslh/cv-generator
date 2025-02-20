import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrl: './button-edit.component.css',
})
export class ButtonEditComponent {
  @Output() runEdit = new EventEmitter<void>();
}
