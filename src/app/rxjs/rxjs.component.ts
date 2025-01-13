import { Component , OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { filter, interval, map, Observable } from 'rxjs';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit, OnDestroy {
  _interval:any; 
  constructor(private router:ActivatedRoute, private sharedService: SharedDataService) {}
  count:number = 0;
  ngOnInit():void {


    this.sharedService.getData().subscribe((data:any)=>{
      this.count = data;
    })

    this.router.data.subscribe((data:Data) => {
      console.log(data);
    });
    // this._interval = interval(1000).subscribe((count)=> console.log(count));

    const customObservable = Observable.create((observer:any) => {
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


    // customObservable.subscribe((data:any)=>{console.log(data)}, (error:any)=>{console.log(error)}, ()=>{console.log('Completed')});
    this._interval = customObservable.pipe(filter(((data:any)=> data > 1)), map((data:any)=>  data+1)).subscribe((data:any)=>{
      console.log(data);
    })
  };

  ngOnDestroy(): void {
    this._interval.unsubscribe();
  }


}
