import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrescriptionComponent } from './components/add-prescription/add-prescription.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { DoctorComponent } from './doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { PasswordComponent } from './components/password/password.component';

const routes: Routes = [
  {
    path: '', component: DoctorComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "sidenav", component: SidenavComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "header", component: HeaderComponent },
      { path: "add-prescription", component: AddPrescriptionComponent },
      { path: "profile", component: ProfileComponent },
      { path: "password", component: PasswordComponent },
      { path: "view-appointment", component: ViewAppointmentsComponent },
      { path: "view-patients", component: ViewPatientsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
