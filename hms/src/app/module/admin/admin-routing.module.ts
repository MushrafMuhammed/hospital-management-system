import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "navbar", component: NavbarComponent },
      { path: "home", component: HomeComponent },
      { path: "add-department", component: AddDepartmentComponent },
      { path: "add-doctor", component: AddDoctorComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "view-appointment", component: ViewAppointmentsComponent },
      { path: "view-doctors", component:ViewDoctorsComponent },
      { path : "view-patients", component:ViewPatientsComponent},
      { path: "profile", component: ProfileComponent },

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
