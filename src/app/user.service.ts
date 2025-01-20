import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable
} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  _username = new BehaviorSubject<any>(null);
  username:Observable<any> = this._username.asObservable();

  greeting = new BehaviorSubject<string>("hello");
  
  constructor() { }

  setUserName(name:string){
    this._username.next(name);
  }

  getUserName(){
    return this.username;
  }
}
