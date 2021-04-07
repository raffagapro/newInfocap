import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;
  private _userIsAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(
    private storage: Storage,
  ) {
    this.initStorage();
   }

  async initStorage() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.validateLoggedIn();
  }

  async validateLoggedIn(){
    const id = await this._storage.get('id');
    this._userIsAuthenticated.next(id !== null && id !== undefined);
  }

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
