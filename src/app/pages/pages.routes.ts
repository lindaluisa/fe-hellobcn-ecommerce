import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from 'src/app/pages/pages.component';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { WardrobeComponent } from 'src/app/pages/wardrobe/wardrobe.component';
import { DetailComponent } from 'src/app/pages/detail/detail.component';
import { ProfileComponent } from './profile/profile.component';

import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'wardrobe', component: WardrobeComponent},
    { path: 'detail', component: DetailComponent},
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
