import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { API } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _storage: Storage | null = null;
  private _loggedUser = new BehaviorSubject<User>(
    new User(null, null, null, null, null, null, null, null, null)
  );

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) {
    this.initStorage();
  }

  async initStorage() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.getUser();
  }

  async getUser(){
    const id = await this._storage.get('id');

    if (id) {
      const name = await this._storage.get('name');
      const last_name = await this._storage.get('last_name');
      const img_profile = await this._storage.get('img_profile');
      const email = await this._storage.get('email');
      const phone1 = await this._storage.get('phone1');
      const phone2 = await this._storage.get('phone2');
      const role = await this._storage.get('role');
      const access_token = await this._storage.get('access_token');
      const user = new User(
        id,
        name,
        last_name,
        img_profile === 'http://167.71.251.136/storage/' ? '/' : img_profile,
        email,
        phone1,
        phone2,
        role,
        access_token
      );
      this._loggedUser.next(user);
    }
  }

  get loggedUser() {
    return this._loggedUser.asObservable();
  }

  setUser(sentUser: User) {
    this._loggedUser.next(sentUser);

    this._storage.set('id', sentUser.id);
    this._storage.set('name', sentUser.name);
    this._storage.set('last_name', sentUser.last_name);
    this._storage.set('img_profile', sentUser.img_profile);
    this._storage.set('email', sentUser.email);
    this._storage.set('phone1', sentUser.phone1);
    this._storage.set('phone2', sentUser.phone2);
    this._storage.set('role', sentUser.role);
    this._storage.set('access_token', sentUser.access_token);
  }

  rmUser() {
    this._loggedUser.next(new User(null, null, null, null, null, null, null, null, null));
  }

  dbUserGrab(token: string, role: string) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    this.http.get(API + '/account/me', { headers: headers })
      .subscribe(resData => {
        let img: string;
        if (resData['data'].img_profile === null) {
          img = null;
        } else {
          img = resData['data'].img_profile;
        }
        this._loggedUser.next(
          new User(
            resData['data'].id,
            resData['data'].name,
            resData['data'].last_name,
            img,
            resData['data'].email,
            resData['data'].phone1,
            resData['data'].phone2,
            role,
            token
          )
        );
      });
  }
}
