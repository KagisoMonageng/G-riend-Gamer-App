import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import {NgToastService}from 'ng-angular-popup'
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';

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

  newMessage: any;
  messageList:  string[] = [];

  constructor(private gamerServ : GamerService,private toast : NgToastService,private chatService:ChatService,private router : Router) { }

  ngOnInit(): void {
    this.gamerServ.getOneGamer(localStorage.getItem('selected')).subscribe( async(gamer:any)=>{
      this.gamer.gametag = await gamer.gametag;
      this.gamer.name = await gamer.name;
      this.gamer.image = await gamer.image;

      this.chatService
      .getNewMessage()
      .subscribe((message: string) => {
        this.messageList.push(message);
      });
    },(err:HttpErrorResponse)=>{
      this.toast.error({detail:"Sorry!", summary:err.error.message,position:'tr',duration:2000})
    }) 
  }

  openProfile()
  {
    this.router.navigateByUrl('/view-profile');
   
  }

  sendMessage()
  {
    console.log(this.newMessage);
    this.chatService.sendMessage(this.newMessage); 
    this.newMessage = '';


  }

}
