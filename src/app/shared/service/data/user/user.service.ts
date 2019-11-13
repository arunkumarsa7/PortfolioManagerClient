import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';
import { IUser } from 'src/app/shared/models/iuser';
import { IApiResponse } from 'src/app/shared/models/iapi-response';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/getUsers', httpOptions);
  }

  getUserById(id: number): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/getUserById', id, httpOptions);
  }

  createUser(user: IUser): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/createUser', user, httpOptions);
  }

  updateUser(user: IUser): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/updateUser', user, httpOptions);
  }

  deleteUser(id: number): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'user/deleteUser', id, httpOptions);
  }

}
