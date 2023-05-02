import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private service: CommonService) { }

  message: any
  onSubmit(formdata: any, openTicket:any) {
    this.service.getTicket(formdata).subscribe((res: { message: any }) => {
      this.message = res.message
      alert(this.message)
      openTicket.reset() 
    })
  }

}
