import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
