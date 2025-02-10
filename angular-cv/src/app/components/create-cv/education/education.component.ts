import { Component, Input } from '@angular/core';
//interfaces
import type { Dates } from '@interfaces/create-cv.interfaces';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  @Input() school: DateSchool = { start: '', end: '', courseName: '' };
  @Input() description: string = '';
}

interface DateSchool extends Dates {
  courseName: string;
}
