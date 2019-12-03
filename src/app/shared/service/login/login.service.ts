import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, config } from 'rxjs/index';
import { map } from 'rxjs/operators';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';
import { IApiResponse } from 'src/app/shared/models/iapi-response';
import { IUser } from 'src/app/shared/models/iuser';

@Injectable()
export class LoginService {
    private currentUserSubject: BehaviorSubject<IUser>;
    public currentUser: Observable<IUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IUser {
        return this.currentUserSubject.value;
    }

    generateToken(loginPayload): Observable<IApiResponse> {
        return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'login/generate-token', loginPayload, httpOptions);
    }

    login(username) {
        return this.http.post<any>(`${AppConstants.baseUrl}` + 'user/getUserDetails', username, httpOptions)
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

}
