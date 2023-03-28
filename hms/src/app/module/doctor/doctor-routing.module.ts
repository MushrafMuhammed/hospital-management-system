import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPrescriptionComponent } from './components/add-prescription/add-prescription.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';
import { ViewPatientsComponent } from './components/view-patients/view-patients.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  { path: '', component: DoctorComponent,
  children : [
    {path: "", redirectTo:"home", pathMatch:"full" },
    {path: "home", component:HomeComponent},
    {path:"add-prescription", component:AddPrescriptionComponent},
    {path: "profile", component:ProfileComponent},
    {path : "view-appointment", component:ViewAppointmentsComponent},
    {path: "view-patients", component: ViewPatientsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
