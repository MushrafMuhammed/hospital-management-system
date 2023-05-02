import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { AdministratorService } from 'src/app/module/admin/service/administrator.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent {
  // parseInt(arg0: any): any {
  // throw new Error('Method not implemented.');
  // }
  constructor(private commonService: CommonService, private adminService: AdministratorService) { }


  departmentList: any
  doctorsList: any
  ngOnInit() {
    this.adminService.view_department().subscribe((res: { departmentsList: any }) => {
      this.departmentList = res.departmentsList
    })

    this.adminService.view_doctor().subscribe((res: { doctorsList: any }) => {
      this.doctorsList = res.doctorsList
    })

  }

  deptValue: any
  doctorList: any
  onChange(event: any) {
    this.deptValue = event.target.value
    this.commonService.getdoctors(this.deptValue).subscribe((res: { doctors: any }) => {
      // console.log(res.doctors)
      this.doctorList = res.doctors
    })
  }

  name:any
  email:any
  contact:any
  onSubmit(formData: any) {
    console.log(formData)
      this.name= formData['name']
      this.email= formData['email']
      this.contact= formData['phon']
    this.commonService.getappoinment(formData).subscribe((res: { message: any }) => {
      alert(res.message)

    })

  }

  options = {
    "key": "rzp_test_LobQFmdaxz5yzX", // Enter the Key ID generated from the Dashboard
    "amount":"25000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Digi-Patients", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "hand": "/patient-detais",
    "prefill": {
      "name": "", //your customer's name
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  }

  rzp1:any
  pay() {
    this.rzp1 = new this.commonService.nativeWindow.Razorpay(this.options);
    this.rzp1.open();

  }
}
  
  


