import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable()
export class NavigateService {
  constructor(private _router: Router) {}

  go(route: string, extras?: NavigationExtras) {
    this._router.navigate([route], extras);
  }
}
