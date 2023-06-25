import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPost } from 'src/app/interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // url = 'https://g-riend-gamer-app-api.vercel.app/posts/';
  url = 'http://localhost:8080/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(this.url + "getPosts").pipe()
  }
  addPost(post: UserPost) {
    return this.http.post(this.url + "addPost/" + post.gametag, post)
  }
  deletePost(post_id: number) {
    return this.http.patch(this.url + "delete/" + post_id, null)
  }

  editPost(post: UserPost) {
    return this.http.patch(this.url + "edit/" + post.post_id, post)
  }

}
