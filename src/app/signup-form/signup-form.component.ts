import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  private Name = '';
  private Email = '';
  private Instagram = '';

  constructor() { }

  ngOnInit() {
  }

  get disableButton(){
    return this.Instagram.length === 0 ||
    this.Email.length === 0;
  }

  submitCredentials(){
    console.log('Instagram:', this.Instagram);
    console.log('Email:', this.Email);
    console.log('Name:', this.Name);

    this.Name = '';
    this.Instagram = '';
    this.Email = '';
  }

}