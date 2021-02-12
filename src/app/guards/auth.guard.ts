import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private as: AuthService,
    private router: Router,
  ){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.as.userIsAuthenticated) {
        this.router.navigateByUrl('/login');
      }
      return this.as.userIsAuthenticated;
  }
}
