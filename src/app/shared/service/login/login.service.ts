import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';
import { IApiResponse } from 'src/app/shared/models/iapi-response';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(loginPayload): Observable<IApiResponse> {
        return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'login/generate-token', loginPayload, httpOptions);
    }

}
