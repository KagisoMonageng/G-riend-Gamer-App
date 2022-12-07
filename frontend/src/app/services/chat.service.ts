import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket = io('http://localhost:3000');
  
  public message$: BehaviorSubject<string> = new BehaviorSubject('');


  constructor() {
    //this.socket = io(this.url)
   }

  public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  joinRoom(data:any):void
  {
    this.socket.emit('join',data)
  }

  // getNewMessage(): Observable <any>
  // {
  //   return new Observable<{gamer:string,message: string}>(observer=>{
  //     this.socket.on('message',(data:any)=>{
  //       observer.next(data)
  //     });
  //     return ()=>{
  //       this.socket.disconnect();
  //     }
  //   })

  // }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
  


}
