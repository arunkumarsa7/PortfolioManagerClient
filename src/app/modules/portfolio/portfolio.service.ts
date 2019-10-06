import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {

  private baseUrl = 'http://localhost:8080/healthApp/getServiceOfferingsByOE';

  constructor(private http: HttpClient) { }

   getServiceOfferingList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}