import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent {
  constructor(private service: AdministratorService){}

  doctors: any
  count : any
  ngOnInit() {
    this.service.view_doctor().subscribe((res: { doctorsList : any, drCount : number }) => {
      this.doctors = res.doctorsList
      this.count = res.drCount.toString()
      console.log(this.doctors)
    })
  }
}
