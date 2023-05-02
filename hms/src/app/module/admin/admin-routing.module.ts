import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewDoctorsComponent } from './components/view-doctors/view-doctors.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { AuthGuard } from './guard/auth.guard';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "dashboard", component: DashboardComponent, canActivate:[AuthGuard] },
      { path: "navbar", component: NavbarComponent },
      { path: "home", component: HomeComponent, canActivate:[AuthGuard] },
      { path: "add-department", component: AddDepartmentComponent, canActivate:[AuthGuard] },
      { path: "add-doctor", component: AddDoctorComponent, canActivate:[AuthGuard] },
      { path: "change-password", component: ChangePasswordComponent, canActivate:[AuthGuard] },
      { path: "view-appointment", component: ViewAppointmentsComponent, canActivate:[AuthGuard] },
      { path: "view-doctors", component:ViewDoctorsComponent, canActivate:[AuthGuard] },
      { path : "view-patients", component:ViewPatientsComponent, canActivate:[AuthGuard]},
      { path : "view-tickets", component:TicketComponent, canActivate:[AuthGuard]},
      { path: "profile", component: ProfileComponent, canActivate:[AuthGuard] },

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
