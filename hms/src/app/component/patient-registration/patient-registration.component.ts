import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  constructor (private service : CommonService ){ }

  patientForm = new FormGroup({
    name: new FormControl('', Validators.required ),
    address: new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    dob: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  onSubmit() {
    const patientData: any = new FormData()

    patientData.append('name', this.patientForm.value.name)
    patientData.append('address',this.patientForm.value.address)
    patientData.append('gender',this.patientForm.value.gender)
    patientData.append('email',this.patientForm.value.email)
    patientData.append('phone',this.patientForm.value.phone)
    patientData.append('dob',this.patientForm.value.dob)
    patientData.append('password',this.patientForm.value.password)

    console.log(patientData)

    this.service.patientReg(patientData).subscribe((res:{message:any})=>{
      // console.log(res.message)
      alert(res.message)
    })


    
  }
}
