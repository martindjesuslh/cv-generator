import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-competencies',
  templateUrl: './key-competencies.component.html',
  styleUrl: './key-competencies.component.css',
})
export class KeyCompetenciesComponent {
  @Input() title: string = '';
  @Input() competencies: string[] = [];
}
