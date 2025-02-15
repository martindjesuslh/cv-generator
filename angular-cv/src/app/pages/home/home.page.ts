import { Component } from '@angular/core';
//services
import { NavigateService } from '@services/navigate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {
  constructor(private _ns: NavigateService) {}

  goCreateCv() {
    this._ns.go('create-cv');
  }
}
