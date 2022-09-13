import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private nameSource = new BehaviorSubject<string>('');
  name = this.nameSource.asObservable()
  isLoggedIn:boolean=false

  constructor() { }

  setName(name: string) {
    this.nameSource.next(name);
  }

  removeName(){
    this.nameSource.unsubscribe();
  }

  setLoggedIn(flag:boolean){
    this.isLoggedIn=flag
  }
}
