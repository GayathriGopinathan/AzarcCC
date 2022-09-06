import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private http:HttpClient
  ) { }

  getEmployeeList():Observable<any>{
    return this.http.get(this.baseURL)
  }
}
