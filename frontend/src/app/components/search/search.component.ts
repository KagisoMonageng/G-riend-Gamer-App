import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  selectedGamersDetails: any;
  games: any[] = [];
  term:string = ''
  featured : any[] = [];

  constructor(private spinner : NgxSpinnerService,private jwt : JwtService,private auth : AuthService,private gamer : GamerService,private router:Router) {

  }

  ngOnInit(): void {

    this.selectedGamersDetails = this.jwt.getData(sessionStorage.getItem('key'))
    //this.spinner.show();
    this.gamer.getGames().subscribe((games :any)=>{
      this.games = games;
      for (let index = 0; index < 3; index++) {
        let gameIndex = Math.floor(Math.random() * (this.games.length - 0 + 1)) + 0;
        if(!this.featured.includes(gameIndex)){
          this.featured.push(gameIndex);
        }
      }
      //console.log(this.featured)
      setTimeout(() => {
        /* spinner ends after 2 seconds */
        //this.spinner.hide();
      }, 500);
    },(err:HttpErrorResponse)=>{

    })

  }


  setGameID(game_id:any)
  {
    sessionStorage.setItem('selectedGame',game_id)
    this.router.navigateByUrl('/view-game')
  }

  textInput(e :any){

  }

  ready(){console.log('first')}







  // gamers: any = [];
  // selectedGamersDetails: any;

  // constructor(private jwt : JwtService,private auth : AuthService,private gamer : GamerService,private router:Router,private chatServ : ChatService) {}

  // ngOnInit(): void {
  //   console.log(this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).gametag)

  //   this.gamer.getGamers(this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).gametag).subscribe((gamers:any)=>{
  //     this.gamers = gamers;
  //     console.log(gamers)

  //   })

  // }

  // addFriend(gametag:string)
  // {
  //   console.log(gametag)
  //   this.chatServ.createRoom(100);
  //   this.gamer.addFriend(gametag).subscribe((response:any)=>{

  //     console.log(response)


  //   },(err:HttpErrorResponse)=>{
  //     console.log(err)
  //   })
  // }

}
