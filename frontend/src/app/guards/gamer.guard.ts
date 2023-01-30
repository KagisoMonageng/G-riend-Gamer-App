import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import {NgToastService}from 'ng-angular-popup'
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GamerGuard implements CanActivate {
  constructor(private router:Router,private auth: AuthService,private toast : NgToastService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //const expiryDate = this.jwt.getTokenExpirationDate(JSON.stringify(localStorage.getItem('key')))

      //console.log(expiryDate);
      if((sessionStorage.getItem('key')!= null)){
        return true;
      }else{
        this.toast.error({detail:"Sorry!", summary:'You need to login first',position:'tr',duration:2000})
        this.router.navigate(['/login']);
        return false;
      }
  }
  
}
