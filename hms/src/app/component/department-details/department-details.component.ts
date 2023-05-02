import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  constructor(private commonService: CommonService) { }
  departments:any
  
  ngOnInit() {
    this.commonService.viewDepartments().subscribe((res: { departmentsList: any }) => {
      this.departments = res.departmentsList
    })
  }
}
