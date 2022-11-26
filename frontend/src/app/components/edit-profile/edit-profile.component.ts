import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import {NgToastService}from 'ng-angular-popup';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  //User details
  gametag ?:string;
  name ?:string;
  surname ?:string;
  email ?:string;
  image_link: any;

  preset :string = "i8maua2c";

  update_dp = new FormGroup({
    file:new FormControl(),
    upload_preset: new FormControl()}
  );

  cloudinaryUrl: string = 'https://api.cloudinary.com/v1_1/dev-lab/image/upload';
  file: any;
  isUpdating: boolean = false;

  image = {
    link : '' 
  }

  constructor(private gamerServ : GamerService,private toast : NgToastService,private jwt:JwtService,private spinner:NgxSpinnerService, private http:HttpClient,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.surname = this.jwt.getData(JSON.stringify(localStorage.getItem('key'))).surname;
    this.name = this.jwt.getData(JSON.stringify(localStorage.getItem('key'))).name;
    this.email = this.jwt.getData(JSON.stringify(localStorage.getItem('key'))).email;
    this.gametag = this.jwt.getData(JSON.stringify(localStorage.getItem('key'))).gametag;
    this.image_link = this.jwt.getData(JSON.stringify(localStorage.getItem('key'))).image;
    setTimeout(() => {
      /* spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);
  }

  async onFileChange(event :any)
  {
    this.spinner.show();

    if(event.target.files.length>0)
    {
      this.file =  event.target.files[0];
      this.spinner.hide();
     
    }

  }


  toggleUpdate() {
    if(this.isUpdating)
    {
      this.isUpdating = false;
    }else{
      this.isUpdating = true;
    }

  }

  onUpdate(form: FormGroup)
  {
    if(form.valid){
      if(form.value.confirmPassword == form.value.password)
      {
        this.gamerServ.updateProfile(this.gametag, form.value).subscribe((data:any)=>{
            this.authService.saveToken(data.token)
            this.router.navigateByUrl('/profile');
          
        },(err:HttpErrorResponse)=>{
          this.toast.error({detail:'Sorry!',summary:err.error.message,position:'tr',duration:2000}) 
        })

      }else{
        this.toast.warning({detail:'Ooops!',summary:'Passwords do not match',position:'tr',duration:2000})
       
      }
    } 
  }


  onSubmit(){  
    
    this.spinner.show();
    const formData = new FormData();    
    formData.append("file",this.file)    
    formData.append("upload_preset","i8maua2c");     
    this.http.post(this.cloudinaryUrl,formData).subscribe(async (res:any)=>{     
      this.image_link = await res.url;
      this.image.link = this.image_link;
      
      this.gamerServ.updateProfilePicture(this.gametag,this.image).subscribe((saveData:any)=>{
        this.authService.saveToken(saveData.token);
        localStorage.setItem('image_link',this.image_link);

        this.spinner.hide();
       
      })
     
    }) 
   
  }





}
