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
  friends: any = [];
  selectedGamersDetails: any;

  constructor(private jwt : JwtService,private auth : AuthService,private gamer : GamerService,private router:Router) {}

  ngOnInit(): void {
    
    
  }

  
  

}
