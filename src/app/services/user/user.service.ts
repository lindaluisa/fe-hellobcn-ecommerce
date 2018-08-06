import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

import { SERVICE_URL } from '../../config/config';
import swal from 'sweetalert2';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.loadStorage();
  }

  isLoggedIn() {
    return ( this.token.length > 5 ) ? true : false;
  }

  loadStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse( localStorage.getItem('user') );
    } else {
      this.token = '';
      this.user = null;
    }
  }

  saveStorage( id: string, token: string, user: User) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user) );

    this.user = user;
    this.token = token;
  }

  loginUser(user: User, rememberme: Boolean = false) {

    if ( rememberme) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = SERVICE_URL + '/login';
    return this.http.post(url, user)
      .pipe(
        map( (resp: any) => {

          this.saveStorage( resp.id, resp.token, resp.user );

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

  logout() {
    this.user = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/login']);
  }

  updateUser( user: User ) {

  let url = SERVICE_URL + '/user/' + user._id;
  url += '?token=' + this.token;

  console.log( url );

    return this.http.put (url, user);
  }
}
