import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;
  token : string = '';

  url = 'http://localhost:8080';

  jwtHelper = new JwtHelperService();

  constructor(private http : HttpClient) { }

  register(data: any) {
    return this.http.post(this.url+'/register',data);
  }

  login(data: any) {
    return this.http.post(this.url+'/login',data);
  } 

  forgotPassword(data: any) {
    return this.http.post(this.url+'/forgotPassword',data);
  }

  saveToken(token : string): void
  {
    
    if(token!= null)
    {
      this.isAuthenticated = true;
      this.token = token;
      sessionStorage.setItem('key', this.token);
      
    }
    
  }
  getToken():string|any{
    if(sessionStorage.getItem('key')!=null){
      return JSON.stringify(sessionStorage.getItem('key'))
    }else{
      return null;
    }
  }

  logout()
  {
      this.isAuthenticated = false;
      this.token = ''
      sessionStorage.clear();

  }

}
