import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import {NavComponent } from './nav/nav.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ConsultationFormsPatienComponent } from './consultation-forms-patien/consultation-forms-patien.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'doctor', component: HomeComponent },
  { path: 'doctor/patients', component: PatientsComponent },
  { path: 'doctor/patients/patientList' , component : PatientListComponent},
  { path: 'doctor/patients/consultation', component: ConsultationFormsPatienComponent },
  { path: 'doctor/pharmacy', component: PharmacyComponent },
  { path: 'docotr/profile', component: ProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
