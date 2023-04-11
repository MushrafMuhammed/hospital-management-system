import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: AdministratorService) { }
 
  count: any
  ngOnInit() {
    this.service.view_doctor().subscribe((res: { doctorsList: any, drCount: number }) => {
      this.count = res.drCount.toString()
      console.log(this.count)
    })
  }

}
