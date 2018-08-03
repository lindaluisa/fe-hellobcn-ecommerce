import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

// Pipe Module
import { PipesModule } from 'src/app/pipes/pipes.module';


import { SliderComponent } from '../components/slider/slider.component';

import {
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule ({
  declarations: [
    PagesComponent,
    DashboardComponent,
    DetailComponent,
    WardrobeComponent,
    SliderComponent,
    ProfileComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    DetailComponent,
    WardrobeComponent,
    SliderComponent

  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    MatSliderModule,
    PipesModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class PagesModule { }
