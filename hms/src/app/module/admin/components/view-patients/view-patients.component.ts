import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent {
  constructor(private service: AdministratorService) { }

  patientList: any
  patientCount:any
  ngOnInit() {
    this.service.view_patient().subscribe((res: { patients: any, count: number }) => {
      this.patientList = res.patients
      this.patientCount= res.count
    })
  }

}
