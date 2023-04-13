import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministratorService } from 'src/app/module/admin/service/administrator.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  constructor (private service : AdministratorService ){ }

  myForm = new FormGroup({
    name: new FormControl('', Validators.required ),
    address: new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    dob: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  })

  onSubmit(formdata:any) {
    
    const patientData = new FormData()

    patientData.append('name',formdata['name'])
    patientData.append('address',formdata['address'])
    patientData.append('gender',formdata['gender'])
    patientData.append('email',formdata['email'])
    patientData.append('phone',formdata['phone'])
    patientData.append('dob',formdata['dob'])
    patientData.append('password',formdata['password'])

    console.log(patientData)

    this.service


    
  }
}
