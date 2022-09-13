import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  GridOptions,

} from 'ag-grid-community';

import { Observable, Subject, combineLatest, Subscription, fromEvent, of } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators'
import { Employee } from '../Services/employee-http.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-dash-board',
  templateUrl: './employee-dash-board.component.html',
  styleUrls: ['./employee-dash-board.component.scss']
})
export class EmployeeDashBoardComponent implements OnInit {


  constructor(
    private _http: HttpClientModule,
    public socialAuthService: SocialAuthService,
    private _empService: EmployeeService
  ) {


  }



  employees$ = this._empService.employees$;
  readonly loading$ = this._empService.loading$;
 // search$ = this._empService.search$;


  readonly gridOptions: GridOptions<Employee> = {
    suppressCellFocus: true,
    animateRows: true,
    stopEditingWhenCellsLoseFocus: true,
    defaultColDef: {
      minWidth: 150,
      sortable: true,
      resizable: true,
    },
    rowBuffer: 20
  };


  readonly columnDefs: Array<ColDef<Employee>> = [
    {
      headerName: 'FirstName',
      field: 'firstName',
      sort: 'asc',
    },
    {
      headerName: 'Username',
      field: 'username',
    },
    {
      headerName: 'Email',
      field: 'email',
    },
  ];





  ngOnInit(): void {
    console.log('hhh')
    this.getEmployeeList();


  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe()
  }



  SearchEmployees(event: KeyboardEvent) {
    this.employees$ = this._empService.search$;

    let value: string = ""
    if ((<HTMLInputElement>event.target).value) {

      value = (<HTMLInputElement>event.target).value;
      this._empService.searchFilter(value).
        pipe(
          debounceTime(1000)).
        subscribe((response => console.log(response)));
    }


  }

















}
