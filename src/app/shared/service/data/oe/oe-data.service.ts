import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from 'src/app/shared/models/iapi-response';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';
/***********************************************************************************************************************************
 * This service is responsible for dynamically loading all the OE list for a particular user.
 * Based on the user role he may be able to access multiple OE sites
 * or simply his own all those access control will be received here via JSON
 *
 * Presently dynamic data is added from JSON file till backend is fixed.
 *
 */
@Injectable()
export class OEDataService {

  constructor(private http: HttpClient) { }

  getOperatingEntities() {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'oe/findOperatingEntities', httpOptions);
  }

  doesOEHasServiceOfferings(oeId: number) {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'oe/doesOEHasServiceOfferings', oeId, httpOptions);
  }

}
