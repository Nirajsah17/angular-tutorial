import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  constructor(private fb: FormBuilder) {}
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['123', Validators.required],
    confirmPassword: ['123', Validators.required],
    address: this.fb.group({
      street: ['kaparpura', Validators.required],
      post: ['chapra', Validators.required],
      city: ['muzaffarpur', Validators.required],
    }),
  });

  onSubmit() {
    console.log(this.userForm);
  }
}
