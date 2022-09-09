import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private nameSource = new BehaviorSubject<string>('');
  name = this.nameSource.asObservable()

  constructor() { }

  setName(name: string) {
    this.nameSource.next(name);
  }
}
