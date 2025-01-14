import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(private activeRoute: ActivatedRoute){}
  user: {id: string, name: string} = {id: '', name: ''};
  ngOnInit(): void {
    // this.user = {
    //   id: this.activeRoute.snapshot.params['id'],
    //   name: this.activeRoute.snapshot.params['name'],
    // }

    this.activeRoute.params.subscribe((data:Params)=>{
      this.user = {
        id: data['id'],
        name: data['name']
      }
    })
  }

}
