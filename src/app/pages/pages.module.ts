import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SliderComponent } from '../components/slider/slider.component';

import { MatSliderModule } from '@angular/material';

@NgModule ({
  declarations: [
    PagesComponent,
    DashboardComponent,
    DetailComponent,
    WardrobeComponent,
    SliderComponent
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
    MatSliderModule
  ]
})

export class PagesModule { }
