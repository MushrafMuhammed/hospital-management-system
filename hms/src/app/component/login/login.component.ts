import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private service: CommonService){}
  onSubmit(formdata: any) {
    console.log(formdata)
    this.service.patientLog(formdata).subscribe((res:{message:any,user:any, username:any, token:any })=>{
      console.log(res.message)
      alert(res.message)
    })
    

  }

}
