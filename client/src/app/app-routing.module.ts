import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
/*import {NavComponent} from './nav/nav.component';*/
import {PatientsComponent} from './patients/patients.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';
import {ProfileComponent} from './profile/profile.component';



  const  routes: Routes =[
  {path: 'doctor', component: HomeComponent},
  {path: 'doctor/patients', component: PatientsComponent},
  {path: 'doctor/pharmacy', component: PharmacyComponent},
  {path: 'doctor/profile', component: ProfileComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
