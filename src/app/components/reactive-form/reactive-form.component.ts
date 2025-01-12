import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  register = new FormGroup({
    username: new FormControl('niraj'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      street: new FormControl("kaparpura"),
      post: new FormControl("chapra"),
      city: new FormControl("Muzaffarpur"),
    })
  });

  onSubmit() {}

  loadApi(){
    // this.register.setValue({
    //   username: "nirak",
    //   password: "oppp",
    //   confirmPassword: "pop"
    // });
    this.register.patchValue({
      username: "Sachin"
    })
  }
}
