import { Component, OnChanges, OnInit, SimpleChanges,HostListener, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit,OnDestroy {

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {

    this.reveal()
  }

  videos = [
    { url: 'https://res.cloudinary.com/decomtmki/video/upload/c_crop,g_north,h_1080,w_720,y_200/v1680125588/Motivational_video_-_This_will_change_your_mind_-_whatsapp_30_sec_video_-_g5wjfu.mp4', thumbnail: 'https://example.com/video1-thumbnail.jpg' },
    { url: 'https://res.cloudinary.com/decomtmki/video/upload/c_crop,g_north,h_1080,w_720,y_200/v1680125588/Motivational_video_-_This_will_change_your_mind_-_whatsapp_30_sec_video_-_g5wjfu.mp4', thumbnail: 'https://example.com/video2-thumbnail.jpg' },
    { url: 'https://res.cloudinary.com/decomtmki/video/upload/c_crop,g_north,h_1080,w_720,y_200/v1680125588/Motivational_video_-_This_will_change_your_mind_-_whatsapp_30_sec_video_-_g5wjfu.mp4', thumbnail: 'https://example.com/video3-thumbnail.jpg' },
    // Add more videos here
  ];

  private observer: IntersectionObserver;

  constructor(private auth : AuthService,private location : Location,private gamerServ: GamerService, private account: AuthService, private toast: NgToastService, private jwt: JwtService, private spinner: NgxSpinnerService,  private router: Router) { }

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          video.src = video.dataset['src'];
          video.play();
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.video').forEach(video => {
      this.observer.observe(video);
    });

  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  playVideo(video: HTMLVideoElement|any) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }




  back() {
    this.location.back()
  }

  reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for (let index = 0; index < reveals.length; index++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[index].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[index].classList.add("active");
      } else {
        reveals[index].classList.remove("active");
      }
    }
  }


}
