import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { EmployeeService } from '../Services/employee.service'
import {
  ColDef,
  ColumnApi,
  GetRowNodeIdFunc,
  GridApi,
  GridReadyEvent,
  ValueGetterParams,
  GridOptions
} from 'ag-grid-community';

import { Observable } from 'rxjs';
import { User } from '../Services/employee-http.service';

@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.css']
})
export class EmployeeDashBoardComponent implements OnInit {

  constructor(
    private _http: HttpClientModule,
    public socialAuthService: SocialAuthService,
    private _empService: EmployeeService
  ) {

  }

  
 
  readonly employees$ =this._empService.employees$;
  readonly loading$ = this._empService.loading$;

  readonly gridOptions: GridOptions<User> = {
    suppressCellFocus: true,
    animateRows: true,
    stopEditingWhenCellsLoseFocus: true,
    defaultColDef: {
      minWidth: 150,
      sortable: true,
      resizable: true,
    },
  };


  readonly columnDefs: Array<ColDef<User>> = [
    {
      headerName: 'FirstName',
      field: 'firstName',
      sort: 'asc',
    },
    {
      headerName: 'Username',
      field: 'username',
    },
    
    
   
   
  ];

 


  ngOnInit(): void {
 
    this._empService.getEmployeeList().subscribe((value)=>{
      console.log(value)
      console.log(this.employees$)
      console.log(this.columnDefs)
      
    })

    
      
  }

     
 
    




 


}
