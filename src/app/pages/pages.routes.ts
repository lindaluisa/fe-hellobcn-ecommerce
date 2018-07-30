import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from 'src/app/pages/pages.component';

import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { WardrobeComponent } from 'src/app/pages/wardrobe/wardrobe.component';
import { DetailComponent } from 'src/app/pages/detail/detail.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'wardrobe', component: WardrobeComponent},
    { path: 'detail', component: DetailComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
