import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdministratorService } from '../service/administrator.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private tokenService: AdministratorService, private router : Router){}

 canActivate(){
  if (!this.tokenService.getToken()){
    this.router.navigate(['/admin/login'])
   }
   return true
 }


  
}
