import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCredentials } from '../types';
import { LoginService } from '../login.service';
import { auth } from 'firebase';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginFormGroup: FormGroup
  router: any;
  
  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private route: Route) {
    this.loginFormGroup = formBuilder.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
   }

  ngOnInit() {
  }

  // test(loginFormGroup: FormGroup): void {
  //   console.log(loginFormGroup.value.email + " | " + loginFormGroup.value.password);
  // }

  login() {
    console.log("Hoi  ");
    let loginCredentials: LoginCredentials = this.loginFormGroup.value;
    this.loginService.login(loginCredentials)
      .then((authData)  => {
        this.router.navigate(["./tabs"]);
        console.log(authData);
      })
      .catch((authError) => {
        console.log(authError);
      });
  }
}

