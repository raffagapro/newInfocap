import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {

  constructor(
    private us: UserService,
    private router: Router,
  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this.us.loggedUser.role !== 'usuario') {
        this.router.navigateByUrl('/profesional/home');
      }
      return true;
  }
}
