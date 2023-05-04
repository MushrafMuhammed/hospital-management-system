import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';

import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { AddPrescriptionComponent } from './components/add-prescription/add-prescription.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PasswordComponent } from './components/password/password.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';





@NgModule({
  declarations: [
    DoctorComponent,
    ViewAppointmentsComponent,
    ProfileComponent,
    ViewPatientsComponent,
    AddPrescriptionComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    PasswordComponent,
    AddPatientComponent

    
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    
    
    // Material,0
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class DoctorModule { 
 
}
