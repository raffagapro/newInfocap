import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() { }

  get userIsAuthenticated(){
    return this._userIsAuthenticated.asObservable();
  }

  login(){
    this._userIsAuthenticated.next(true);
  }

  logout(){
    this._userIsAuthenticated.next(false);
  }

}
