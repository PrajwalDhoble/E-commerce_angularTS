import { Component } from '@angular/core';
import { SignUp } from '../datatype';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {

  constructor( private user:UserService){}

  signUp( data : SignUp){
    this.user.userSignUp(data)
  }
}
