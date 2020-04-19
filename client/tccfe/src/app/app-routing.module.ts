import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DonateComponent } from './pages/donate/donate.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InvolvedComponent } from './pages/involved/involved.component';
import { InformedComponent } from './pages/informed/informed.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'about',
    component: AboutComponent
  },{
    path: 'donate',
    component: DonateComponent
  },{
    path: 'contact',
    component: ContactComponent
  },{
    path: 'involved',
    component: InvolvedComponent
  },{
    path: 'informed',
    component: InformedComponent
  }
  ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
