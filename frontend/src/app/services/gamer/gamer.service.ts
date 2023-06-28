import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/comment';
import { Game } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GamerService {

  url = 'https://g-riend-gamer-app-api.vercel.app/';
  // url = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }


  getGamers(gametag:string): Observable<any>
  {
    return this.http.get(this.url+'games/searchGamers/'+gametag);
  }

  getOneGamer(gametag:any): Observable<any>
  {
    return this.http.get(this.url+'account/search/'+gametag);
  }

  addFriend(gametag:string)
  {
    let data = {friendTag : gametag}
    return this.http.patch(this.url+'games/addFriend/'+sessionStorage.getItem('loggedIn_gamer'),data);
  }

  getMyFavs(gametag:any) : Observable<any[]>
  {
    return this.http.get<any[]>(this.url+'games/getGames/'+gametag);

  }

  addToFavs(game_id:any){
    return this.http.patch(this.url+'games/addToFavs/'+sessionStorage.getItem('loggedIn_gamer')+'/'+game_id,null);
  }

  getGames(): Observable<Game[]>
  {
    return this.http.get<Game[]>(this.url+'games/getGames');

  }
  getOneGame(game_id:any) : Observable<Game>
  {
    return this.http.get<Game>(this.url+'games/getGame/'+game_id);
  }

  getComments(game_id:any) : Observable<Comment[]>
  {
    return this.http.get<Comment[]>(this.url+'games/getcomments/'+game_id);
  }

  addComment(game_id:any,data: Comment)
  {
    return this.http.post(this.url+'games/comment/'+game_id+'/'+sessionStorage.getItem('loggedIn_gamer'),data);
  }

  editComment(comment_id:any,data: any)
  {
    return this.http.patch(this.url+'games/comment/'+comment_id,data);
  }

  deleteComment(comment_id:any,data: any)
  {
    return this.http.patch(this.url+'games/delete-comment/'+comment_id,data);
  }

}
