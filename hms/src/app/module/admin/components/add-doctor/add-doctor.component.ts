import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  constructor(private service: AdministratorService) { }

  departments: any
  ngOnInit() {
    this.service.view_department().subscribe((res: { departmentsList: any }) => {
      this.departments = res.departmentsList
      console.log(this.departments)
    })
  }

  doctor_img: any
  onImageChanged(event: any) {
    this.doctor_img = event.target.files[0]

  }

  onSubmit(formdata: any) {
    console.log(formdata)
    const doctorData = new FormData()

    doctorData.append('name', formdata['name'])
    doctorData.append('address', formdata['address'])
    doctorData.append('gender', formdata['gender'])
    doctorData.append('email', formdata['email'])
    doctorData.append('phone', formdata['phone'])
    doctorData.append('qualification', formdata['qualification'])
    doctorData.append('password', formdata['password'])
    doctorData.append('department', formdata['department'])
    doctorData.append('profile_img', this.doctor_img)

    console.log(doctorData)

    this.service.add_doctor(doctorData).subscribe((res: { statusCode: number, message: string }) => {
      alert(res.message)
    })
  }

}
