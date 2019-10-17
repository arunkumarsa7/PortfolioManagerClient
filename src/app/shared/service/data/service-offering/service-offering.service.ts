import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IApiResponse } from 'src/app/shared/models/iapi-response';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {
  private baseUrl = 'http://localhost:8080/portfolio-manager/';

  constructor(private http: HttpClient) { }

  getServiceOfferings(oeId: number) {
    const data = { oeId: `${oeId}` };
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<IApiResponse>(`${this.baseUrl}` + 'getServiceOfferingsByOE', JSON.stringify(data), httpOptions);
  }

}
