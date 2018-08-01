import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuardGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  canActivate() {


    if ( this._userService.isLoggedIn() ) {

      console.log( 'Sliding through Login Guards');
      return true;
    } else {
      console.log( 'Blocked by guard' );
      this.router.navigate(['/login']);
      return false;
    }
  }
}
