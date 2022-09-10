import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import { EmployeeDashBoardComponent } from './employee-dash-board/employee-dash-board.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component'
import { AuthService } from './Services/auth.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'dashboard',component:EmployeeDashBoardComponent,canActivate:[AuthService]},
  {path:'profile',component:EditProfileComponent,canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
