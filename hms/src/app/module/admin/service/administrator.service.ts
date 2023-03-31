import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  baseUrl = 'http://127.0.0.1:8000/administrator/'
  constructor( private http : HttpClient ) {  }

  admin_login(adminData:any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', adminData)
  }





  getToken(){
    return !!localStorage.getItem('logToken')
  }

  
}
