import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSliderModule } from '@angular/material';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';


@NgModule ({
  declarations: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
  exports: [
    NopagefoundComponent,
    BreadcrumbsComponent,
    SidebarComponent  ],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSliderModule,
    PipesModule
  ]
})

export class SharedModule { }

