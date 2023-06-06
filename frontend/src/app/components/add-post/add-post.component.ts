import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back()
  }



  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }



}
