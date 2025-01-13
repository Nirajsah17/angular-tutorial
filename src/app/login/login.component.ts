import { Component } from '@angular/core';
import { UserService } from "../user.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:string = '';

  constructor(private user:UserService){}

  onSubmitLogin(name:any){
    console.log(name)
    this.user.setUserName(name);
  }
}
