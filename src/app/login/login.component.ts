import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../services/service.index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  rememberme: Boolean = false;

  constructor(
    public router: Router,
    public _userService: UserService
  ) { }


  ngOnInit() {
  }

  login( form: NgForm ) {

    if (form.invalid) {
      return;
    }

    const user = new User(null, form.value.email, form.value.password);
    this._userService.loginUser(user, form.value.rememberme)
            .subscribe( correct => this.router.navigate(['/dashboard']) );
    // console.log(form.value);
  }

}
