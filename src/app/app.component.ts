import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';

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
  constructor(private sharedService: SharedDataService) {}
  toggle() {
    this._toggle = !this._toggle;
  }

  updateCount(){
    this.count+=1;
    this.sharedService.setData(this.count);
  }
}
