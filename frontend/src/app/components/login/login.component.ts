import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { NgxSpinnerService } from 'ngx-spinner';

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


  constructor(private router : Router,private authService: AuthService,private jwt : JwtService, private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()

    setTimeout(() => {
      
      this.spinner.hide();
    }, 2000);
  }

  login(form : FormGroup)
  {
    this.spinner.show()
    this.authService.login(form.value).subscribe( async (data: any)=>{
      await this.authService.saveToken(data.token);
      setTimeout(() => {
      
        this.spinner.hide();
        this.router.navigateByUrl('/home');
      }, 2000);
     

    },(error:HttpErrorResponse)=>{
      console.log(error.error.message);
    });


  }

}
