import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment} from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  private go: boolean = false;
  logSub: Subscription;


  constructor(
    private as: AuthService,
    private router: Router,
  ){

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      this.logSub = this.as.userIsAuthenticated.subscribe(v => {
        this.go = v;
      })
      this.logSub.unsubscribe()
      if (!this.go) {
        this.router.navigateByUrl('/login');
      }
      return this.go;
  }
}
