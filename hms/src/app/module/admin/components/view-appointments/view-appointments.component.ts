import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent {
  constructor(private service: AdministratorService){ }

  appointments:any
  totalAppointment:any
  ngOnInit(){
    this.service.viewAppointments().subscribe((res:{appointmentList:any, totalAppointment:any})=>{
      this.appointments= res.appointmentList
      this.totalAppointment = res.totalAppointment
    })
  }
}
