import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  selectedGamersDetails: any;
  games: any = [];

  constructor(private jwt : JwtService,private auth : AuthService,private gamer : GamerService,private router:Router) {}

  ngOnInit(): void {

    this.gamer.getMyFavs(sessionStorage.getItem('loggedIn_gamer')).subscribe((games :any)=>{
      this.games = games;
      console.log(games)
    },(err:HttpErrorResponse)=>{

    })

  }


  setGameID(game_id:any)
  {
    sessionStorage.setItem('selectedGame',game_id)
    this.router.navigateByUrl('/view-game')
  }

  
  

}
