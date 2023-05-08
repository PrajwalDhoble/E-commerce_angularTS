import { Component } from '@angular/core';
import { SignUp } from '../datatype';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {
  signUp( data : SignUp){
    console.warn(data)
  }
}
