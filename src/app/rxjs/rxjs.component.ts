import { Component , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit, OnDestroy {
  _interval:any; 
  constructor(private router:ActivatedRoute) {}
  ngOnInit():void {
    this.router.data.subscribe((data:Data) => {
      console.log(data);
    });
    this._interval = interval(1000).subscribe((count)=> console.log(count));

    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if(count === 5){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error('Count is greater than 3'));
        }
      }, 1000);
    })


    customObservable.subscribe((data)=>{console.log(data)}, (error)=>{console.log(error)}, ()=>{console.log('Completed')});
  };

  ngOnDestroy(): void {
    this._interval.unsubscribe();
  }

}
