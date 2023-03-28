import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { HistoryComponent } from './components/history/history.component';


@NgModule({
  declarations: [
    PatientComponent,
    MakeAppointmentComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
