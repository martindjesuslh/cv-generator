import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public myForm = {
    fullName: 'Martín De Jesús Leaños Hernández',
    address: '160 Parnell St, Dublin 1, D01 CH05',
    email: 'martindjesuslh@gmail.com',
    phone: '857791694',
  };
}
