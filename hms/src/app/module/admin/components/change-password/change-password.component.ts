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

  constructor(private service: AdministratorService, private router: Router) { }
  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {

    const currentPassword = this.changePasswordForm.value.currentPassword
    const newPassword = this.changePasswordForm.value.newPassword
    const confirmNewPassword = this.changePasswordForm.value.confirmPassword

    console.log(currentPassword, newPassword, confirmNewPassword)
    if (newPassword !== confirmNewPassword) {
      console.log('invalid')
      alert('invalid')
    }

    else {
      const token = localStorage.getItem('logToken')
      // console.log(token)
      alert('Done')

      this.service.changePassword(token, currentPassword, newPassword).subscribe((res: { message: any }) => {
        console.log(res.message)
        alert(res.message)
      })
    }


  }


}
