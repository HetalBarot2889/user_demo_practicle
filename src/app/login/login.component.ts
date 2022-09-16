import { Component, OnInit } from '@angular/core';
import { Form, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  loginData: any[] = [];

  constructor(private router: Router) {
    this.loginform = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    const email = 'eve.holt@reqres.in';
    const password = 'cityslicka';
    this.loginData.push({
      'email': email,
      'password': password
    })
    console.log(this.loginData);
    this.loginform.get('email')?.setValue(this.loginData[0]['email']);
    this.loginform.get('password')?.setValue(this.loginData[0]['password']);

  }

  get f() {
    return this.loginform.controls;
  }
  OnSubmit() {
    const fData = this.loginform.value;
    console.log("val => ", fData)
    this.router.navigate(['/userlist']);
  }
}
