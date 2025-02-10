import { Component, Input } from '@angular/core';
//interfaces
import type { Dates } from '@interfaces/create-cv.interfaces';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  @Input() dates: Dates = { start: '', end: '' };
  @Input() where: Where = { name: '', location: '' };
  @Input() jobTitle: string = '';
  @Input() responsibilities: string[] = [];
}

interface Where {
  name: string;
  location: string;
}
