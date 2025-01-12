import { Component } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  coureses: any = ['Angular', 'React', 'Javascript'];
  declaration = false;
  userModel = new User('niraj', '8804851174', '', true);
  topicHasError: boolean = false;

  validateCourse(value: string) {
    if (value === '') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    console.log(this.userModel)
  }
}
