import { Injectable } from '@angular/core';

import { Observable, throwError , BehaviorSubject, finalize, map,  tap, timer} from 'rxjs';
import {Employee,EmployeeHttpService} from '../Services/employee-http.service';

import { ColDef } from 'ag-grid-community';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly loading$$ = new BehaviorSubject<boolean>(false);
  private readonly employees$$ = new BehaviorSubject<Employee[]>([]);  
  private readonly columnDef$$ = new BehaviorSubject<ColDef[]>([]);
  private readonly search$$=new BehaviorSubject<Employee[]>([]);

  readonly loading$: Observable<boolean> = this.loading$$;
  readonly employees$: Observable<Employee[]> = this.employees$$;
  readonly columnDef$:Observable<ColDef[]>= this.columnDef$$
  readonly search$:Observable<Employee[]>=this.search$$;

  constructor(
    private _empHttpService:EmployeeHttpService

  ) { }

  getEmployeeList(){
    this.loading$$.next(true);
    return this._empHttpService.getEmployeeList().pipe(
      tap((response)=>{
        this.employees$$.next(response.users)
     
      }),          
        finalize(()=>this.loading$$.next(false)))
    }
    getColumnObservable() {
      this.loading$$.next(true);
      return this._empHttpService.getColumnObservable().pipe(
      tap((response)=>this.columnDef$$.next(response.column))
      ),
      finalize(()=>this.loading$$.next(false))

    }

    searchFilter(value:string){
      console.log(value)
      this.loading$$.next(true);
      return this._empHttpService.getFilterResult(value).pipe(
        tap((response) => this.search$$.next(response.users)),
        finalize(() => this.loading$$.next(false)),
      );
      
      }
   
  
   
}
