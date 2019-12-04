import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';
import { IApiResponse } from 'src/app/shared/models/iapi-response';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    generateToken(loginPayload): Observable<IApiResponse> {
        return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'login/generate-token', loginPayload, httpOptions);
    }

    login(username) {
        return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/getUserDetails', username, httpOptions).toPromise();
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}
