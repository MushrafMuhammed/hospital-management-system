import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DepartmentDetailsComponent } from './component/department-details/department-details.component';
import { DoctorDetailsComponent } from './component/doctor-details/doctor-details.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PatientRegistrationComponent } from './component/patient-registration/patient-registration.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "department-details", component: DepartmentDetailsComponent },
  { path: "doctor-details", component: DoctorDetailsComponent },
  { path: "login", component: LoginComponent },
  { path: "contact", component:ContactComponent },
  { path : "patient-registration", component:PatientRegistrationComponent},
  { path : "navbar", component:NavbarComponent},
  { path: 'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule) },
  { path: 'patient', loadChildren: () => import('./module/patient/patient.module').then(m => m.PatientModule) },
  { path: 'doctor', loadChildren: () => import('./module/doctor/doctor.module').then(m => m.DoctorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
