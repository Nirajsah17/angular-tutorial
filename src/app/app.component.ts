import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAvailable: boolean = false;
  title = 'form-tutorials';
  _toggle: boolean = false;

  toggle() {
    this._toggle = !this._toggle;
  }
}
