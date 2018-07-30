import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../services/user/user.service';
import { User } from '../models/user.model';

import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./login.component.css']
})


export class SignupComponent implements OnInit {

  hide = true;
  form: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  equalInputs( field1: string, field2: string) {

    return (group: FormGroup) => {

      const comparison1 = group.controls[field1].value;
      const comparison2 = group.controls[field2].value;

      if (comparison1 === comparison2) {
        return null;
      }

      return {
        equalInputs: true
      };
    };
  }


  ngOnInit() {

    this.form = new FormGroup({
      username: new FormControl( null, Validators.required ),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      conditions: new FormControl( false )
    }, { validators: this.equalInputs( 'password', 'password2') } );

  }

  signupUser() {

    if ( this.form.invalid ) {
      return;
    }

    if ( !this.form.value.conditions) {
      swal('Important', 'You have to adhere to the terms!', 'warning');
      return;
    }

    // console.log(this.form.value);
    const user = new User(
      this.form.value.username,
      this.form.value.email,
      this.form.value.password
    );

    this._userService.createUser(user)
            .subscribe( resp => {
              this.router.navigate(['/login']);
              console.log(resp);
            });
  }
}

