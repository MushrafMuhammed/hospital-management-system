import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  constructor(private service: AdministratorService){ }

  tickets:any
  totalTicket:any
  ngOnInit(){
    this.service.viewTickets().subscribe((res:{ticketList:any, totalTicket:any})=>{
      this.tickets= res.ticketList
      this.totalTicket = res.totalTicket
    })
  }

}
