import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ViewGameComponent } from './components/view-game/view-game.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { GamerGuard } from './guards/gamer.guard';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'profile', component:EditProfileComponent,canActivate: [GamerGuard]},
  {path:'view-profile', component:ViewProfileComponent,canActivate: [GamerGuard]},
  {path:'search', component:SearchComponent},
  {path:'view-game', component:ViewGameComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
