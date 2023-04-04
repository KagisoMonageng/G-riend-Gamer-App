import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from 'src/app/components/add-post/add-post.component';
import { UserPostsComponent } from 'src/app/components/user-posts/user-posts.component';
import { ViewPostComponent } from 'src/app/components/view-post/view-post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [{ path: '', component: PostsComponent,children:[{path:'',component: UserPostsComponent},{path:'view-post',component: ViewPostComponent},{path:'add',component:AddPostComponent}] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
