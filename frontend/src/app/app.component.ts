import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newMessage:any;
  messageList: string[] = [];

  constructor(private chatService: ChatService){

  }

  ngOnInit(){}
  


 
  title = 'frontend';
}
