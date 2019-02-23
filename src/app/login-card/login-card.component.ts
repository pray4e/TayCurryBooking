import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})


export class LoginCardComponent implements OnInit {

  private Username='';
  private password='';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.router.navigate([''])
      })
    .catch((err) => console.log(err));
  }


  // Disable Go button when there is no value 
  get disableButton(){
    return this.Username.length === 0 ||
    this.password.length === 0; 
  }

  submitCredentials(){
    console.log('Username:', this.Username);
    console.log('password:', this.password);

    this.Username = '';
    this.password = '';
  }



}
