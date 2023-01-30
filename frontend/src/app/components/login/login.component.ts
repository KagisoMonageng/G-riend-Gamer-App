import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {NgToastService}from 'ng-angular-popup'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    cred: new FormControl(),
    password: new FormControl()
  });

  forgotPasswordForm = new FormGroup({
    email: new FormControl()
  });

  constructor(private router : Router,private toast : NgToastService,private authService: AuthService,private jwt : JwtService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    if(sessionStorage.getItem('key')!=null)
    {
      this.toast.success({detail:"Welcome back", summary:"You are already logged in.",position:'tr',duration:2000})
      this.router.navigateByUrl('/home');
    }

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  login(form : FormGroup)
  {
    this.spinner.show()
    this.authService.login(form.value).subscribe( async (data: any)=>{
      await this.authService.saveToken(data.token);
      sessionStorage.setItem('loggedIn_gamer',this.jwt.getData(data.token).gametag)

      setTimeout(() => {
        //this.toast.success({detail:"Welcome back", summary:"You have successfully logged in.",position:'tr',duration:2000})
      
        this.spinner.hide();
        this.router.navigateByUrl('/home');
      }, 3000);
     

    },(error:HttpErrorResponse)=>{
      this.toast.error({detail:"Sorry!", summary:error.error.message,position:'tr',duration:2000})
      setTimeout(() => {
        this.spinner.hide();
        
      }, 3000);
    });

  }

  forgotPasswordSubmit(form: FormGroup)
  {
    this.spinner.show()
    this.authService.forgotPassword(form.value).subscribe((data: any)=>{
      setTimeout(() => {
        this.toast.success({detail:"Good News!", summary:'Credentials sent to your email',position:'tr',duration:3000})
      
        this.spinner.hide();
        this.router.navigateByUrl('');
      }, 1000);
     

    },(error:HttpErrorResponse)=>{
      form.reset()
      this.toast.error({detail:"Sorry!", summary:'No gamer registered with this email',position:'tr',duration:3000})
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });



  }

}
