import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss']
})
export class ViewGameComponent implements OnInit {

  game : Game = {
    name: '',
    publisher: '',
    image: '',
    category: ''
  }


  constructor(private jwt : JwtService,private auth : AuthService,private gamer : GamerService,private router:Router) {}

  ngOnInit(): void {

    this.gamer.getOneGame(sessionStorage.getItem('selectedGame')).subscribe((game:Game)=>{
      this.game = game;

    },(err:HttpErrorResponse)=>{

    })


  }

}
