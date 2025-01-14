import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  constructor(private activeRoute: ActivatedRoute, private router:Router){}
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
    });

    this.router.navigate(['users/1/niraj'], {queryParams:{
      name: 'niraj',
      id: 83
    }, fragment: 'load'})
  }

}
