import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { AppConstants } from 'src/app/shared/constant/app-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private facadeService: FacadeService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };
    this.generateToken(loginPayload);
  }

  ngOnInit() {
    this.clearLocalStorage();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  generateToken(loginPayload: { username: string; password: string; }) {
    this.facadeService.generateToken(loginPayload).then(data => {
      if (data.status === 200) {
        this.initializeLocalStorage(data.result);
        this.facadeService.setUserLoggedIn(true);
        this.loadLoggedInUserDetails();
      } else {
        this.invalidLogin = true;
      }
    });
  }

  loadLoggedInUserDetails() {
    if (window.localStorage.getItem(AppConstants.username)) {
      this.facadeService.login(window.localStorage.getItem(AppConstants.username)).then(response => {
        window.localStorage.setItem(AppConstants.loggedInUser, JSON.stringify(response.result));
        this.router.navigate([AppConstants.homePageUrl]);
      });
    }
  }

  initializeLocalStorage(response: { token: string; username: string; }) {
    window.localStorage.setItem(AppConstants.accessToken, response.token);
    window.localStorage.setItem(AppConstants.username, response.username);
  }

  clearLocalStorage() {
    window.localStorage.removeItem(AppConstants.username);
    window.localStorage.removeItem(AppConstants.accessToken);
    window.localStorage.removeItem(AppConstants.loggedInUser);
  }

}
