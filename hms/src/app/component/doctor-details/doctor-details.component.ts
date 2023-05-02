import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent {
  constructor(private commonService: CommonService) { }
  doctors:any
  ngOnInit() {
    this.commonService.viewDoctors().subscribe((res: { doctorsList: any }) => {
      this.doctors = res.doctorsList
    })

  }
}


