import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServiceOffering } from 'src/app/shared/models/iservice-offering';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {
  private baseUrl = 'http://localhost:8080/healthApp/getServiceOfferingsByOE';

  constructor(private http: HttpClient) { }

  getServiceOfferings() {
    return this.http.get<IServiceOffering>(`${this.baseUrl}`);
  }

}
