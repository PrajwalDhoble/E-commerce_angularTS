import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp , logIn } from '../datatype';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) { }
  showLogin = false
  authError : string = ''
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  
  signUp(data: SignUp): void {
    console.warn(data)
    this.seller.userSignUp(data)
  }

  login(data: logIn): void {
    this.authError = ""
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((error)=>{
      if(error){
        this.authError='Email or Password is incorrect'
      }
    })
  }
  
  openLogin(){
    this.showLogin = true
  }

  openSignUp(){
    this.showLogin = false
  }

}
