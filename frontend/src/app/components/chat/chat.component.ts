import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import {NgToastService}from 'ng-angular-popup'
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Message } from 'src/app/interfaces/message';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  gamer = {
    name:'',
    gametag:'',
    image:''
  }

  messageData : Message = {
    sender: '',
    recipient: '',
    text: '',
    time: ''
  };

  messageList:  string[] = [];

  messageForm = new  FormGroup({
    message:  new FormControl()
  })

  constructor(private gamerServ : GamerService,private toast : NgToastService,private chatService:ChatService,private router : Router,private auth:AuthService,private jwt:JwtService) { }

  ngOnInit(): void {
    this.gamerServ.getOneGamer(sessionStorage.getItem('selected')).subscribe( async(gamer:any)=>{
      this.gamer.gametag = await gamer.gametag;
      this.gamer.name = await gamer.name;
      this.gamer.image = await gamer.image;

      this.chatService.getNewMessage().subscribe((message: Message) => {
        if((this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).gametag == message.recipient)||(this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).gametag == message.sender))
        {
          this.messageList.push(message.text);
          console.log(message.recipient)
        }
        
        
      });
    },(err:HttpErrorResponse)=>{
      this.toast.error({detail:"Sorry!", summary:err.error.message,position:'tr',duration:2000})
    }) 
  }

  openProfile()
  {
    this.router.navigateByUrl('/view-profile');
  }

  sendMessage(messageForm:FormGroup)
  {

    this.messageData.sender = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).gametag
    this.messageData.recipient = this.gamer.gametag = this.gamer.gametag;
    this.messageData.text = messageForm.value.message
    this.messageData.time = new Date().getTime()
    
    this.chatService.sendMessage(this.messageData); 
    messageForm.reset();
  }

}
