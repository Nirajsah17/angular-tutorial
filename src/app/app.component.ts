import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAvailable: boolean = false;
  title = 'form-tutorials';
  _toggle: boolean = false;
  count:number = 0
  constructor(private sharedService: SharedDataService, private userService: UserService) {}
  toggle() {
    this._toggle = !this._toggle;
  }

  updateCount(){
    this.count+=1;
    this.sharedService.setData(this.count);
  }

  updateGreet(){
    this.userService.greeting.next("coming from app component :: ");
  }
}
