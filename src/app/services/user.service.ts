import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loggedUser: User;

  constructor() { }

  get loggedUser(){
    return this._loggedUser;
  }

  setUser(sentUSer: User){
    this._loggedUser = sentUSer;
  }

  rmUSer(){
    this._loggedUser = null;
  }
}
