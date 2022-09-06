import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { EmployeeDashBoardComponent } from './employee-dash-board/employee-dash-board.component';
import { AuthService } from './Services/auth.service';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('288842146243-hnn8p4f1qpopveovjaub24fqsc4ktubc.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },AuthService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
