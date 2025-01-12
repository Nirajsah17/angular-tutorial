import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/username.validator';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrl: './custom-validator.component.css',
})
export class CustomValidatorComponent {
  constructor(private fb: FormBuilder) {}
  userForm = this.fb.group({
    userName: [
      'niraj',
      [Validators.required, Validators.minLength(3), forbiddenNameValidator],
    ],
  });

  before:string = 'gray'
  after:string = 'red'

  changeColor(){
    this.before = "yellow";
    this.after = "purple"
  }
}
