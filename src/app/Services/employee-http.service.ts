import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable, throwError, BehaviorSubject, finalize, map, tap, timer } from 'rxjs';



export interface User {
 // id: number;
  firstName: string;
  username: string;
 // phone: number;
 // email: string;
  // address:string[]



}

@Injectable({
  providedIn: 'root',
})

export class EmployeeHttpService {
  //baseURL: string = "https://jsonplaceholder.typicode.com/users";
  baseURL: string = "https://dummyjson.com/users";
  columnUrl: string = "assets/column.json"
  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get<{
      users: User[];
      total: number;
      skip: number;
      limit: number;
    }>(this.baseURL);
  }

  getColumnObservable() {
    return this.http.get<{ column: ColDef[] }>(this.columnUrl);
  }

}
