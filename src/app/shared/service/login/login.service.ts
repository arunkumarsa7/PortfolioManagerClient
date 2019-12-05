import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';
import { IApiResponse } from 'src/app/shared/models/iapi-response';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private router: Router, private facadeService: FacadeService) { }

    generateToken(loginPayload: { username: string; password: string; }) {
        return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'login/generate-token', loginPayload, httpOptions).toPromise();
    }

    login(username: string) {
        return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/getUserDetails', username, httpOptions).toPromise();
    }

    logout() {
        this.clearLocalStorage();
        this.facadeService.setUserLoggedIn(false);
        this.router.navigate([AppConstants.loginPageUrl]);
    }

    clearLocalStorage() {
        window.localStorage.removeItem(AppConstants.username);
        window.localStorage.removeItem(AppConstants.accessToken);
        window.localStorage.removeItem(AppConstants.loggedInUser);
    }

}
