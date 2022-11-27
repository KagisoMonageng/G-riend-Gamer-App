import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { GamerService } from 'src/app/services/gamer/gamer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  gamer = {
    name:'',
    gametag:'',
    image:'',
    games :[]
  }

  constructor( private gamerServ:GamerService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.gamerServ.getOneGamer(localStorage.getItem('selected')).subscribe( async(gamer:any)=>{
      this.gamer.gametag = await gamer.gametag;
      this.gamer.name = await gamer.name;
      this.gamer.image = await gamer.image;
    },(err:HttpErrorResponse)=>{
      this.toast.error({detail:"Sorry!", summary:err.error.message,position:'tr',duration:2000})
    })
  }

}
