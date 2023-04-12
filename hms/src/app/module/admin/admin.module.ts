import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent,
    AddDepartmentComponent,
    AddDoctorComponent,
    ChangePasswordComponent,
    HomeComponent,
    ViewAppointmentsComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    SideBarComponent,
    ViewDoctorsComponent,
    ViewPatientsComponent,
    ProfileComponent
    
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
