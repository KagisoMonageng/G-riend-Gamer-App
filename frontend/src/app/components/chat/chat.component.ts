import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import {NgToastService}from 'ng-angular-popup'
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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

  newMessage: string = '';
  messageList:  string[] = [];

  messageForm = new  FormGroup({
    message:  new FormControl()
  })

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

  sendMessage(messageForm:FormGroup)
  {
    this.chatService.sendMessage(messageForm.value.message); 
    messageForm.reset();
  }

}
