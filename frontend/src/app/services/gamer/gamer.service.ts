import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/interfaces/game';

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

  addFriend(gametag:string)
  {
    let data = {friendTag : gametag}
    return this.http.patch(this.url+'/addFriend/'+sessionStorage.getItem('loggedIn_gamer'),data);
  }

  getMyFavs(gametag:any)
  {
    return this.http.get(this.url+'/getGames/'+gametag);

  }

  getGames(): Observable<any[]>
  {
    return this.http.get<any[]>(this.url+'/getGames');

  }
  getOneGame(game_id:any) : Observable<Game>
  {
    return this.http.get<Game>(this.url+'/getGame/'+game_id);
  }

}
