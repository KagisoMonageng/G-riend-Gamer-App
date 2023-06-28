import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { UserPostsComponent } from 'src/app/components/user-posts/user-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ViewPostComponent } from 'src/app/components/view-post/view-post.component';
import { AddPostComponent } from 'src/app/components/add-post/add-post.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PostMenuComponent } from 'src/app/components/post-menu/post-menu.component';



@NgModule({
  declarations: [
    PostsComponent,
    UserPostsComponent,
    ViewPostComponent,
    AddPostComponent,
    PostMenuComponent

  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgToastModule,
    Ng2SearchPipeModule,
    ImageCropperModule,
  
  ]
})
export class PostsModule { }
