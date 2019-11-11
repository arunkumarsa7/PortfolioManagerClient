import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from 'src/app/shared/models/iapi-response';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolios(serviceOfferingId: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'portfolio/getPortfoliosByServiceOffering', serviceOfferingId, httpOptions);
  }

  doesPortfoioHasProjects(portfolioId: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'portfolio/doesPortfoioHasProjects', portfolioId, httpOptions).toPromise();
  }

}
