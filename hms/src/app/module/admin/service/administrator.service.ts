import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable, NgProbeToken } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  baseUrl = 'http://127.0.0.1:8000/administrator/'
  baseUrl2 = 'http://127.0.0.1:8000/patient/'

  constructor(private http: HttpClient) { }

  admin_login(adminData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', adminData)
  }

  add_department(deptData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'add-department', deptData)
  }

  view_department(): Observable<any> {
    return this.http.get(this.baseUrl + 'view-department')
  }

  add_doctor(doctorData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'add-doctor', doctorData)
  }

  view_doctor(): Observable<any> {
    return this.http.get(this.baseUrl + 'view-doctor')
  }


  getMyProfile(token: any): Observable<any> {
    return this.http.get(this.baseUrl + 'my-profile/' + token);
  }

  changePassword(formData: any): Observable<any> {
    return this.http.post(this.baseUrl + 'change-password', formData)
  }

  view_patient():Observable<any>{
    return this.http.get(this.baseUrl2 + 'view-patients')
  }

  viewTickets():Observable<any>{
    return this.http.get(this.baseUrl + 'view-tickets')
  }

  viewAppointments():Observable<any>{
    return this.http.get(this.baseUrl + 'view-appointment')
  }


  getToken() {
    return !!localStorage.getItem('logToken')
  }


}
