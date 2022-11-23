import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';

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


  constructor(private router : Router,private authService: AuthService,private jwt : JwtService) { }

  ngOnInit(): void {
  }

  login(form : FormGroup)
  {
    this.authService.login(form.value).subscribe( async (data: any)=>{
      await this.authService.saveToken(data.token);
      await this.router.navigateByUrl('/home');

    },(error:HttpErrorResponse)=>{
      console.log(error.error.message);
    });


  }

}
