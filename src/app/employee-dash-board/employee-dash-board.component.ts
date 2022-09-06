import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { EmployeeService } from '../Services/employee.service'

@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent implements OnInit {
  employee!: any[]


  constructor(
    private _http: HttpClientModule,
    public socialAuthService: SocialAuthService,
    private _empService: EmployeeService
  ) {

  }

  ngOnInit(): void {
    console.log('hhehr')
    //this.getEmployeeList()
  }
  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (response) => {
        console.log(response)
      },
      error: () => {
        console.log('Error')
      },
      complete: () => {
        console.log('requestCompleted')
      }

      

    })
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }


}
