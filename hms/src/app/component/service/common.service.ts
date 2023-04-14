import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = 'http://127.0.0.1:8000/patient/'
  baseUrl2 = 'http://127.0.0.1:8000/administrator/'
  

  constructor(private http: HttpClient) { }

  patientReg(formData:any):Observable<any>{
    return this.http.post(this.baseUrl + 'patient-reg', formData)
  }

  patientLog(formData:any):Observable<any>{
    return this.http.post(this.baseUrl + 'patient-login', formData)
  }

  getdoctors(deptData:any):Observable<any>{
    return this.http.get(this.baseUrl2 + 'get-doctor/'+ deptData)
  }
}
