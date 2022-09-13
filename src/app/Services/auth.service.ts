import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, finalize, map, Observable, tap, timer, combineLatest } from 'rxjs';
import {DataService} from '../Services/data.service';

import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';





@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router,
    private socialAuthService: SocialAuthService,
    private _dataservice:DataService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    return this._dataservice.isLoggedIn
  //   return this.socialAuthService.authState.pipe(
  //     map((socialUser: SocialUser) => !socialUser),     
      
  //     tap((isLoggedIn: boolean) => {
  //       console.log(this._dataservice.isLoggedIn)
  //       if(!this._dataservice.isLoggedIn){
  //         console.log('hjfksdfsjd' + isLoggedIn)
  //         isLoggedIn=false
  //         this.router.navigate(['login'])
  //       }
  //       else{
         
  //          isLoggedIn=true
  //       }
  //       // let name:string=""
  //       // this._dataservice.name.subscribe(val=>{
  //       //   name=val;
  //       // })
  //       // console.log(name)
  //       //   if(name==""){
  //       //     isLoggedIn=false
  //       //     this.router.navigate(['login'])
  //       //   }
    
  //       // if (!isLoggedIn) {
  //       //   this.router.navigate(['login']);
  //       // }
  //     })
  //   );
   }
}
