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
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import {VgMediaDirective} from '@videogular/ngx-videogular/core';


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
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule

  ]
})
export class PostsModule { }
