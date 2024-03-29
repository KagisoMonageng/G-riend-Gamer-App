import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { JwtService } from '../jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;
  token : string = '';
  //url = 'http://localhost:8080/account';

  url = 'https://g-riend-gamer-app-api.vercel.app/account';

  jwtHelper = new JwtHelperService();

  constructor(private http : HttpClient,private jwt : JwtService) { }

  register(data: any) {
    return this.http.post(this.url+'/register',data);
  }

  login(data: any) {
    return this.http.post(this.url+'/login',data);
  }

  forgotPassword(data: any) {
    return this.http.post(this.url+'/forgotPassword',data);
  }

  updateProfilePicture(gametag:any,image:any)
  {
    return this.http.patch(this.url+'/updateProfilePicture/'+gametag,image);

  }

  updateProfile(gametag:any,data:any)
  {
    return this.http.patch(this.url+'/update/'+gametag,data);

  }



  saveToken(token : string): void
  {

    if(token!= null)
    {
      this.isAuthenticated = true;
      this.token = token;
      sessionStorage.setItem('key', this.token);
      sessionStorage.setItem('loggedIn_gamer',this.jwt.getData(token).gametag)

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
