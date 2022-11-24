import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private jwt : JwtService,private auth : AuthService) {

    

  
   }

  ngOnInit(): void {
    console.log(this.jwt.getData(this.auth.token).name);
    
  }
  

}
