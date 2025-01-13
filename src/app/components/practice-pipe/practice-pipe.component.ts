import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-pipe',
  templateUrl: './practice-pipe.component.html',
  styleUrl: './practice-pipe.component.css'
})
export class PracticePipeComponent {
  message:string = "Hello World";
  date:Date = new Date();
  amount:number = 500;
  person = {
    name: "John",
    age: 25
  };
}
