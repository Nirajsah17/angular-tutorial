import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userName = 'Invalide'
  constructor(private user: UserService){}

  ngOnInit():void{
    this.user.getUserName().subscribe((data:any)=>{
      this.userName = data
    })
  }
}
