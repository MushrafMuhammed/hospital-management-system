import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { AdministratorService } from 'src/app/module/admin/service/administrator.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent {
  constructor(private commonService: CommonService, private adminService: AdministratorService) { }


  departmentList: any
  doctorsList:any
  ngOnInit() {
    this.adminService.view_department().subscribe((res: { departmentsList: any }) => {
      this.departmentList = res.departmentsList
    })

    this.adminService.view_doctor().subscribe((res: { doctorsList: any }) => {
      this.doctorsList = res.doctorsList
    })
    
  }

  deptValue:any
  doctorList:any
  onChange(event:any){
    this.deptValue=event.target.value
    this.commonService.getdoctors(this.deptValue).subscribe((res:{doctors:any})=>{
      console.log(res.doctors)
      this.doctorList = res.doctors
    })
  }

}
