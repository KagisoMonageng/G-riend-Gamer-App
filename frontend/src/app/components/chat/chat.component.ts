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

  roomNo : number = 0

  loggedIn_gamer :string = ''

  constructor(private gamerServ : GamerService,private toast : NgToastService,private chatService:ChatService,private router : Router,private auth:AuthService,private jwt:JwtService) { }

  ngOnInit(): void {

    this.roomNo = Math.floor(Math.random() * 2000);
    this.chatService.createRoom(this.roomNo);

    this.loggedIn_gamer = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key')))
    
    
    

    // this.gamerServ.getOneGamer(sessionStorage.getItem('selected')).subscribe((gamer:any)=>{
    //   this.gamer.gametag = gamer.gametag;
    //   this.gamer.name = gamer.name;
    //   this.gamer.image = gamer.image;



    //   this.chatService.getNewMessage().subscribe((message: Message) => {
    //     //if((this.loggedIn_gamer == message.recipient))
    //     //{
    //       this.messageList.push(message.text);
    //     //}
    //   });
    // },(err:HttpErrorResponse)=>{
    //   this.toast.error({detail:"Sorry!", summary:err.error.message,position:'tr',duration:2000})
    // }) 
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
    this.messageData.time = new Date().getHours()+':'+new Date().getMinutes()
    
    this.chatService.sendMessage(this.messageData); 
    messageForm.reset();
  }

  

}
