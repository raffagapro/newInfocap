import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment} from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProGuard implements CanLoad {
  loggedUser: User;
  userSub: Subscription;
  
  constructor(
    private us: UserService,
    private router: Router,
  ){}
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      this.userSub = this.us.loggedUser.subscribe(user => {
        this.loggedUser = user;
      });
      if (this.loggedUser.role === 'usuario') {
        this.userSub.unsubscribe();
        this.router.navigateByUrl('/user/home');
      }
      this.userSub.unsubscribe();
      return true;
  }
}
