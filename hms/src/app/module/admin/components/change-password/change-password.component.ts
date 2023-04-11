import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private service : AdministratorService){ }

  myForm = new FormGroup({
    currentPassword : new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  onSubmit(formData:any){


  }
  

}
