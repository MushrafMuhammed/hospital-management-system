import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: AdministratorService, private router: Router) { }

  onSubmit(formdata: any) {
    this.service.admin_login(formdata).subscribe((res: { statusCode: number, user: string, username: string })=>{
      if (res.statusCode == 200){
        localStorage.setItem('user', res.user)
        localStorage.setItem('username',res.username)
        
        this.router.navigate(['admin/home'])
      }
    })

  }
}
