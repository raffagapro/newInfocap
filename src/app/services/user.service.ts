import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';
import { API, PATH } from 'src/environments/environment';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loggedUser = new BehaviorSubject<User>(
    new User(null, null, null, null, null, null, null, null, null)
  );

  constructor(
    private http: HttpClient,
  ) { }

  get loggedUser(){
    return this._loggedUser.asObservable();
  }

  setUser(sentUser: User){
    this._loggedUser.next(sentUser);
  }

  rmUser(){
    this._loggedUser.next(new User(null, null, null, null, null, null, null, null, null));
  }

  dbUserGrab(token: string, role: string){
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+token);
    this.http.get(API+'/account/me', {headers: headers})
      .subscribe(resData => {
        // console.log(resData['data'].id);
        let img: string;
        if (resData['data'].img_profile === null) {
          img = null;
        }else{
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
