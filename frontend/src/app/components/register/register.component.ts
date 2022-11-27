import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {NgToastService}from 'ng-angular-popup'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    surname: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl(),
    gender: new FormControl(),
    birthday: new FormControl(),
    confirmPassword: new FormControl(),
    password: new FormControl(),
    tsNcs:new FormControl()
  });


  constructor(private router : Router,private authService: AuthService,private jwt : JwtService,private toast : NgToastService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    if(localStorage.getItem('key')!=null)
    {
      this.toast.success({detail:"Welcome back", summary:"You are already logged in.",position:'tr',duration:2000})
      this.router.navigateByUrl('/home');
    }

    setTimeout(() => {
      
      this.spinner.hide();
    }, 2000);
  }

  register(form:FormGroup)
  {
    
    if(form.value.password == form.value.confirmPassword)
    {
      this.spinner.show();

        this.authService.register(form.value).subscribe( async (data: any)=>{
          await this.authService.saveToken(data.token);

          setTimeout(() => {
            this.toast.success({detail:"Welcome!", summary:data.message,position:'tr',duration:2000})
            this.spinner.hide();
            this.router.navigateByUrl('/home');
          }, 5000);
          

        },(error:HttpErrorResponse)=>{
          this.spinner.hide();
          console.log(error.error.message);
          this.toast.error({detail:"Sorry!", summary:error.error.message,position:'tr',duration:2000})
        });


    }else{
      this.toast.warning({detail:"Ooops!", summary:'Passwords don\'t match',position:'tr',duration:2000})

    }

    



  }

}
