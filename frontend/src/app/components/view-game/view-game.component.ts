import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
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
  commentForm = new FormGroup({
    comment: new FormControl()
  })
  game : Game = {
    name: '',
    publisher: '',
    image: '',
    category: '',
    full_name: '',
    description:'',
    url:''
  }

  comments: any[] = [];

  isCommenting :boolean = false;

  newComment:Comment =
  {
    gametag: '',
    comment_id: 0,
    image: '',
    game_id: 0,
    date: '',
    comment: ''
  }


  constructor(private jwt : JwtService,private auth : AuthService,private gamer : GamerService,private router:Router) {}

  ngOnInit(): void {

    this.gamer.getOneGame(sessionStorage.getItem('selectedGame')).subscribe((game:Game)=>{
      this.game = game;

      this.gamer.getComments(sessionStorage.getItem('selectedGame')).subscribe((comments:Comment[])=>{
        this.comments = comments;
      },(err:HttpErrorResponse)=>{
        console.log(err)
      })

    },(err:HttpErrorResponse)=>{

      console.log(err)

    })


  }

  toggleAdd()
  {
    this.isCommenting = true
  }

  addComment(form: FormGroup)
  {

    this.gamer.getOneGamer(sessionStorage.getItem('loggedIn_gamer')).subscribe((gamer:any)=>{
      this.newComment.image = gamer.image
    },(err:HttpErrorResponse)=>{
      console.log(err)
    })

    

    this.newComment.comment = form.value.comment;
    this.newComment.date = new Date().getDate() + '-'+new Date().getMonth() + '-' + new Date().getFullYear();
    this.newComment.game_id = sessionStorage.getItem('selectedGame');
    this.newComment.gametag = sessionStorage.getItem('loggedIn_gamer'); 


    this.gamer.addComment(this.newComment.game_id,this.newComment).subscribe((result:any)=>{

    },(err:HttpErrorResponse)=>{
      console.log(err);
    })
    
    console.log(this.newComment)


    form.reset()









    
  }

}
