import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    birthday: new FormControl(),
    confirmPassword: new FormControl(),
    password: new FormControl(),
    tsNcs:new FormControl()
  });


  constructor(private router : Router,private authService: AuthService,private jwt : JwtService) { }

  ngOnInit(): void {
  }

  register(form:FormGroup)
  {
    this.authService.register(form.value).subscribe( async (data: any)=>{
      await this.authService.saveToken(data.token);
      await this.router.navigateByUrl('/home');

    },(error:HttpErrorResponse)=>{
      console.log(error.error.message);
    });



  }

}
