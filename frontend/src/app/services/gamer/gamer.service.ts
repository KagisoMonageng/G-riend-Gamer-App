import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamerService {

  url = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getGamers()
  {
    return this.http.get(this.url+'/search');
  }

  getOneGamer(gametag:any)
  {
    this.http.get(this.url+'/search/'+gametag);
  }

}
