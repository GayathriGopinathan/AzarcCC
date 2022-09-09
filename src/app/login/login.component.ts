import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import {DataService} from '../Services/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser!: SocialUser;
  isLoggedin?: boolean;
  GoogleLoginProvider = GoogleLoginProvider;

  googleLoginOptions = {
    scope: 'profile email'
  };

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private _router: Router,
    private _dataService:DataService
  ) { }

  ngOnInit(): void { 
      this.socialAuthService.authState.subscribe((user) => {
       
        setTimeout(()=>{
          if(user==null){
            this.isLoggedin=false
          }                   
        },5000)

      
        this.socialUser = user;
        this.isLoggedin = true;
        this._router.navigate(['dashboard'])

        this._dataService.setName(this.socialUser.name)
        
       
      });
    

    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    // });



    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
    // this.isLoggedin=false

    // console.log('jhehewu')

    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions ).then((data) => {
    //   console.log(data);
    // }).catch(data => {
    //   this.socialAuthService.signOut();
    //   this._router.navigate(['dashboard']);
    // });



    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    // .then(() => this._router.navigate(['dashboard']));

    // this.loginWithGoogle()


    // this.socialAuthService.authState.subscribe((user) => {

    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    //   this._router.navigate(['/dashboard'])



    // });
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    // .then(() => this._router.navigate(['dashboard']));
  }

  // loginWithGoogle(): void {

  //   // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(() => this._router.navigate(['dashboard']));

  // }

  // refreshGoogleToken(): void {
  //   this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }

}
