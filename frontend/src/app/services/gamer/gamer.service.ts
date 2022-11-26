import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamerService {

  url = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  updateProfile(gametag:any ,form:any)
  {
    return this.http.patch(this.url+'/update/'+gametag,form);

  }

  updateProfilePicture(gametag:any,link:any)
  {
    return this.http.patch(this.url+'/updateProfilePicture/'+gametag, link);

  }

  getGamers(gametag:string): Observable<any>
  {
    return this.http.get(this.url+'/searchGamers/'+gametag);
  }

  getOneGamer(gametag:any): Observable<any>
  {
    return this.http.get(this.url+'/search/'+gametag);
  }

}
