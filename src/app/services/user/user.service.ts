import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

import { SERVICE_URL } from '../../config/config';


import swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Service is working!');
  }

  loginUser(user: User, rememberme: Boolean = false) {

    const url = SERVICE_URL + '/login';
    return this.http.post(url, user)
      .pipe(
        map( (resp: any) => {

          localStorage.setItem('id', resp._id);
          localStorage.setItem('token', resp.token);
          localStorage.setItem('user', JSON.stringify(resp.user));

          return true;
        }));
  }


  createUser(user: User) {

    const url = SERVICE_URL + '/user';

    return this.http.post(url, user)
    .pipe(
      map( (resp: any ) => {
      swal( 'User created', user.email, 'success');
      return resp.user;
      }));
  }
}
