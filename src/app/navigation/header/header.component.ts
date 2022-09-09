import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';

import {DataService} from '../../Services/data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName:string="";
  isAuthenticated=false;

  constructor(
    public socialAuthService: SocialAuthService,
    public dataService:DataService
  ) { }

  ngOnInit(): void {
    this.dataService.name.subscribe(data=>{
      this.userName=data;
      if(this.userName!=""){
        this.isAuthenticated=true;
      }
    })
  
  }

  //public isAuthenticated(): boolean {
   // return this.authService.isAuthenticated();
  //}

  logOut(): void {
    this.socialAuthService.signOut();
  }


}
