import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  private Username='';
  private password='';

  constructor() { }

  ngOnInit() {
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
