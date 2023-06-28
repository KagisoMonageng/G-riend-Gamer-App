import { Component, OnChanges, OnInit, SimpleChanges, HostListener, OnDestroy, ElementRef, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { Location } from '@angular/common';
import { PostsService } from 'src/app/services/posts/posts.service';
import { UserPost } from 'src/app/interfaces/posts';
import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, AfterViewInit {
  preload: string = 'auto';


  userPosts: UserPost[] = [];
  @ViewChild('backButton', { static: true }) myElementRef: ElementRef;



  constructor(private location: Location, private toast: NgToastService, private spinner: NgxSpinnerService, private router: Router,
    private postServ: PostsService) { }

  
  ngOnInit(): void {
    this.postServ.getPosts().subscribe((posts: UserPost[]) => {
      console.log(posts)
      this.userPosts = posts;
    }, (err: HttpErrorResponse) => {
      console.log(err)
      this.toast.error({ detail: "Failed to get posts", summary: err.error.message })
    })
  }



  ngAfterViewInit(): void {


  }


  back() {
    this.location.back()
  }




}
