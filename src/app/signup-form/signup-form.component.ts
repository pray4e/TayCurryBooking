import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})


export class SignupFormComponent implements OnInit {

  private Name = '';
  private Email = '';
  private Password ='';
  private Instagram = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  get disableButton(){
    return this.Password.length === 0 ||
    this.Email.length === 0;
  }

  submitCredentials(){
    let email; 
    let password;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    
    console.log('Name:', this.Name);
    console.log('Email:', this.Email);
    console.log("Password", this.Password);
    console.log('Instagram:', this.Instagram);

    this.Name = '';
    this.Password = '';
    this.Email = '';
    this.Instagram = '';
  }

}