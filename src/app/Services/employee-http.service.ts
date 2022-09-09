import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, throwError, BehaviorSubject, finalize, map, tap, timer } from 'rxjs';



export interface Employee {

  firstName: string;
  username: string;
  email:string
 


}

@Injectable({
  providedIn: 'root',
})

export class EmployeeHttpService {
  
  baseURL: string = "https://dummyjson.com/users";
  columnUrl: string = "assets/column.json";
  filterUrl:string="https://dummyjson.com/users/search/?q="
 

  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get<{
      users: Employee[];
      total: number;
      skip: number;
      limit: number;
    }>(this.baseURL);
  }

  getColumnObservable() {
    return this.http.get<{ column: ColDef[] }>(this.columnUrl);
  }
  getFilterResult(value:string){
    return this.http.get< {users: Employee[];}>(this.filterUrl +value)
  }

}
