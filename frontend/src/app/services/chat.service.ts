import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = 'http://localhost:8080';
  private socket !: Socket;

  constructor() {
    //this.socket = io(this.url)
   }

  public sendMessage(message: any) {
    this.socket.emit('new-message', message);
  }

  joinRoom(data:any):void
  {
    this.socket.emit('join',data)
  }

  getNewMessage(): Observable <any>
  {
    return new Observable<{gamer:string,message: string}>(observer=>{
      this.socket.on('new message',(data:any)=>{
        observer.next(data)
      });
      return ()=>{
        this.socket.disconnect();
      }
    })

  }
  


}
