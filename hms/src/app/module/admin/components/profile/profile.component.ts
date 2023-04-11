import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private service: AdministratorService) { }

  profile:any
  token: any
  data: any


  ngOnInit() {
    const token = localStorage.getItem('logToken')
    console.log(token)

    this.service.getMyProfile(token).subscribe((res:{profile_details:any}) => {
      this.profile = res.profile_details
    })
  }
}
  
  
  
  
  