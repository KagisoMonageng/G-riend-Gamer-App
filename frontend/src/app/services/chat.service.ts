import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket = io('http://localhost:3000');
  
  public message$ = new BehaviorSubject<Message>({

    sender:'',
    recipient:'',
    text:'',
    time: new Date().getTime()

  })

  constructor() {
    
   }

   public createRoom(roomNo: number)
   {
    this.socket.emit("create-room",roomNo)
   }

   public joinRoom(roomNo: number)
   {
    this.socket.emit('join-room',roomNo)
   }

   public leaveRoom(roomNo: number)
   {
    this.socket.emit('leave-room',roomNo)
   }



  public sendMessage(message: Message) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
  


}
