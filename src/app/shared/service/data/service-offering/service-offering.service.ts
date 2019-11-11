import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from 'src/app/shared/models/iapi-response';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {

  constructor(private http: HttpClient) { }

  getServiceOfferings(oeId: number) {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'so/getServiceOfferingsByOE', oeId, httpOptions);
  }

  doesServiceOfferingHasPortfolios(soId: number) {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'so/doesServiceOfferingHasPortfolios', soId, httpOptions).toPromise();
  }

}
