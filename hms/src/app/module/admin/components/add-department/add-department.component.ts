import { Component } from '@angular/core';
import { AdministratorService } from '../../service/administrator.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  constructor(private service: AdministratorService) { }

  onSubmit(formdata: any) {
    this.service.add_department(formdata).subscribe((res: { statusCode: number, message: string }) => {
      
      alert(res.message)
    })

  }

}
