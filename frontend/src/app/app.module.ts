import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { GamerGuard } from './guards/gamer.guard';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgToastModule}from 'ng-angular-popup';
import { io, Socket } from 'socket.io-client';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { SearchComponent } from './components/search/search.component';
import { ViewGameComponent } from './components/view-game/view-game.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent,
    EditProfileComponent,
    ViewProfileComponent,
    SearchComponent,
    ViewGameComponent,
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgToastModule,
    Ng2SearchPipeModule

  ],
  providers: [GamerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
