import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/service.index';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})

export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    public _userService: UserService
  ) {
    this.user = this._userService.user;
  }

  ngOnInit() {
  }

  save ( user: User) {

    this.user.username = user.username;
    this.user.email = user.email;


    this._userService.updateUser( this.user )
            .subscribe (resp => {
              console.log(resp);
            });

  }
}


// this.user.username = user.username;
// db username = updated username
