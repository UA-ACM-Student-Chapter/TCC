import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { DonateComponent } from 'src/app/pages/donate/donate.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { InformedComponent } from 'src/app/pages/informed/informed.component';
import { InvolvedComponent } from 'src/app/pages/involved/involved.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutComponent,
    DonateComponent,
    ContactComponent,
    InvolvedComponent,
    InformedComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ]
})
export class DefaultModule { }
