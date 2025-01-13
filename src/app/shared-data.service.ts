import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private messageSource = new BehaviorSubject<any>(null);
  data:Observable<any> = this.messageSource.asObservable();
  constructor() { }
  setData(data:any){
    this.messageSource.next(data);
  }

  getData(){
    return this.data;
  }
}
