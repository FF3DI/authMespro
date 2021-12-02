import { Router } from '@angular/router';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private authService : AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin()
  {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    console.log("valid user "+isValidUser);
    if (isValidUser)
    {
      console.log("isadmin "+this.authService.isAdmin());
      this.router.navigate(['/']);     
    }
      else
      alert('Login ou mot de passe incorrecte!');
}


}
