import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobbies-and-interests',
  templateUrl: './hobbies-and-interests.component.html',
  styleUrl: './hobbies-and-interests.component.css',
})
export class HobbiesAndInterestsComponent {
  @Input() information: Information[] = [];
}

interface Information {
  title: string;
  description: string;
}
