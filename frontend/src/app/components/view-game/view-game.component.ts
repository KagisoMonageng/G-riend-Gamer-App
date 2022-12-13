import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { Game } from 'src/app/interfaces/game';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-view-game',
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss'],
})
export class ViewGameComponent implements OnInit {
  commentForm = new FormGroup({
    comment: new FormControl(),
  });
  game: Game = {
    game_id: '',
    name: '',
    publisher: '',
    image: '',
    category: '',
    full_name: '',
    description: '',
    url: '',
  };

  comments: any[] = [];

  fav: any = [];

  isCommenting: boolean = false;

  newComment: any = {
    gametag: '',
    comment_id: 0,
    image: 0,
    game_id: 0,
    date: '',
    comment: '',
  };
  image = '';

  add: boolean = false;

  gametag: any = '';

  constructor(
    private jwt: JwtService,
    private auth: AuthService,
    private gamer: GamerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gametag = sessionStorage.getItem('loggedIn_gamer');
    this.gamer.getOneGame(sessionStorage.getItem('selectedGame')).subscribe(
      (game: Game) => {
        this.game = game;
        console.log(this.game.game_id);
        this.getComments();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );

    this.gamer.getOneGamer(sessionStorage.getItem('loggedIn_gamer')).subscribe(
      async (gamer: any) => {
        this.image = await gamer.image;
        //console.log(this.image)
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  toggleAdd() {
    this.isCommenting = true;
  }

  getComments() {
    this.gamer.getComments(sessionStorage.getItem('selectedGame')).subscribe(
      (comments: any) => {
        this.comments = comments;
        //console.log()
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  addComment(form: FormGroup) {
    this.newComment.image = this.image;
    this.newComment.comment = form.value.comment;
    this.newComment.date =
      new Date().getMonth() +
      '-' +
      new Date().getDate() +
      '-' +
      new Date().getFullYear();
    this.newComment.game_id = sessionStorage.getItem('selectedGame');
    this.newComment.gametag = sessionStorage.getItem('loggedIn_gamer');
    console.log(this.newComment.comment_id);
    if (this.newComment.comment_id == 0) {
      this.gamer.addComment(this.newComment.game_id, this.newComment).subscribe(
        async (result: any) => {
          this.getComments();
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
    } else if (this.newComment.comment_id > 0) {
      this.gamer
        .editComment(this.newComment.comment_id, this.newComment)
        .subscribe(
          async (result: any) => {
            this.getComments();
            this.newComment.comment_id = 0;
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
    }

    form.reset();
  }

  deleteComment(comment_id: any) {
    this.gamer.deleteComment(comment_id, null).subscribe(
      async (result: any) => {
        this.getComments();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  editComment(comment_id: any, comment: any) {
    this.commentForm.setValue({ comment: comment });
    this.newComment.comment_id = comment_id;
  }

  
   addToFavs(game_id: any) {
    // console.log('game id ', game_id);

    this.gamer
      .getMyFavs(sessionStorage.getItem('loggedIn_gamer'))
      .subscribe((data: any) => {
        this.fav = data;
        
        let test = this.fav.indexOf(game_id);
    console.log('tester game  id' , game_id);
    
    console.log('htis teste ', test);

    if (test <1) {
      console.log(test);

      this.gamer.addToFavs(game_id).subscribe(
        (res: any) => {
          console.log(res.message);
          this.gamer
            .getMyFavs(sessionStorage.getItem('loggedIn_gamer'))
            .subscribe(async (data: any) => {
              this.fav = data;
              console.log('updated ', data);
            });
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
    } else {
      console.log(test);
      console.log('game already exists');
    }
      });

    
  }
}
