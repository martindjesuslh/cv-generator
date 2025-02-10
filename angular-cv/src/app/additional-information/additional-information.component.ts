import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrl: './additional-information.component.css',
})
export class AdditionalInformationComponent {
  @Input() description: string = '';
}
