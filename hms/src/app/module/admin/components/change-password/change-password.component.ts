import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AdministratorService } from '../../service/administrator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  // newfield: any
  // confirmfield: any
  // validation = false

  // myForm = new FormGroup({
  //   currentPassword: new FormControl('', Validators.required),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required)
  // })


  // newchange(event: any) {
  //   this.newfield = event.target.value
  //   // console.log(this.newfield)
  // }

  // confirmchange(event: any) {
  //   this.confirmfield = event.target.value
  //   if (this.confirmfield == this.newfield) {
  //     console.log('valid...')
  //     this.validation = true
  //   }
  //   else {
  //     alert('invalid!')
  //   }


  // }

  // onSubmit(formData: any) {
  //   if (this.validation == true) {

  //     alert('submitted')
  //     this.myForm.reset()
  //   }
  //   else {
  //     alert('please enter valid entry')
  //   }


  // }


  changePasswordForm !: FormGroup;
  token: any
  currentPassword:any
  newPassword:any
  confirmNewPassword:any

  constructor(private service: AdministratorService, private router: Router) { }
  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.token = localStorage.getItem('logToken')
    this.currentPassword = this.changePasswordForm.value.currentPassword
    this.newPassword = this.changePasswordForm.value.newPassword
    this.confirmNewPassword = this.changePasswordForm.value.confirmPassword
    
    const formData= new FormData()
    formData.append('token',this.token)
    formData.append('currentPassword', this.currentPassword)
    formData.append('newPassword', this.newPassword)


    if (this.newPassword !== this.confirmNewPassword) {
      alert('The passwords you entered do not match. Please try again.')
    }

    else {
        this.service.changePassword(formData).subscribe((res: { errorMessage: any }) => {
        alert(res.errorMessage)
        this.changePasswordForm.reset()
      }) 
    }
  }


}
