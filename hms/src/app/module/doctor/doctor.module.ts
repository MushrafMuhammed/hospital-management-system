import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { AddPrescriptionComponent } from './components/add-prescription/add-prescription.component';


@NgModule({
  declarations: [
    DoctorComponent,
    ViewAppointmentsComponent,
    HomeComponent,
    ProfileComponent,
    ViewPatientsComponent,
    AddPrescriptionComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
