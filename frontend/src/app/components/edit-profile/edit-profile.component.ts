import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GamerService } from 'src/app/services/gamer/gamer.service';
import { NgToastService } from 'ng-angular-popup';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  //User details
  gametag?: string;
  name?: string;
  surname?: string;
  email?: string;
  image_link: any;

  game_ids = [];
  games: any = [];

  preset: string = "i8maua2c";

  update_dp = new FormGroup({
    file: new FormControl(),
    upload_preset: new FormControl()
  }
  );

  updateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    surname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    confirmPassword: new FormControl(),
    password: new FormControl('', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}')])
  }
  );

  cloudinaryUrl: string = 'https://api.cloudinary.com/v1_1/dkvrb3pye/image/upload';
  file: any;
  isUpdating: boolean = false;

  image = {
    link: ''
  }

  editDetails: boolean = false;

  constructor(private auth : AuthService,private location : Location,private gamerServ: GamerService, private account: AuthService, private toast: NgToastService, private jwt: JwtService, private spinner: NgxSpinnerService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    this.surname = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).surname;
    this.name = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).name;
    this.email = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).email;
    this.gametag = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).gametag;
    this.image_link = this.jwt.getData(JSON.stringify(sessionStorage.getItem('key'))).image;

    this.gamerServ.getMyFavs(this.gametag).subscribe((data: any) => {

      this.game_ids = data;

      for (let index = 1; index < this.game_ids.length; index++) {
        this.gamerServ.getOneGame(this.game_ids[index]).subscribe((game: any) => {
          this.games.push(game);
        })

      }

    })

    setTimeout(() => {
      /* spinner ends after 2 seconds */
      this.spinner.hide();
    }, 500);
  }

  async onFileChange(event: any) {
    this.spinner.show();

    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.spinner.hide();

    }

  }
  signOut()
  {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  editDetailsToggle(value: boolean) {
    this.editDetails = value;
  }

  viewGame(game:any){
    sessionStorage.setItem('selectedGame',game.game_id)
    this.router.navigateByUrl('/view-game')
  }


  toggleUpdate() {
    if (this.isUpdating) {
      this.isUpdating = false;
    } else {
      this.isUpdating = true;
    }

  }

  onUpdate(form: FormGroup) {
    if (form.valid) {
      if (form.value.confirmPassword == form.value.password) {
        console.log(form.value)
        this.account.updateProfile(this.gametag, form.value).subscribe((data: any) => {
          this.account.saveToken(data.token)
          form.reset();
          this.ngOnInit();


          this.toast.success({ detail: 'Done!', summary: data.message, position: 'tr', duration: 2000 })




        }, (err: HttpErrorResponse) => {
          this.toast.error({ detail: 'Sorry!', summary: err.error.message, position: 'tr', duration: 2000 })
        })

      } else {
        this.toast.warning({ detail: 'Ooops!', summary: 'Passwords do not match', position: 'tr', duration: 2000 })

      }
    }
  }


  onSubmit() {
    console.log('first')

    this.spinner.show();
    const formData = new FormData();
    formData.append("file", this.file)
    formData.append("upload_preset", "ylxn7mgj");
    this.http.post(this.cloudinaryUrl, formData).subscribe(async (res: any) => {
      this.image_link = await res.url;
      this.image.link = this.image_link;

      this.account.updateProfilePicture(this.gametag, this.image).subscribe((saveData: any) => {
        this.account.saveToken(saveData.token);
        sessionStorage.setItem('image_link', this.image_link);

        this.spinner.hide();

      },(err:HttpErrorResponse)=>{
        console.log(err)
      })

    })

  }

  back() {
    this.location.back()
  }





}
