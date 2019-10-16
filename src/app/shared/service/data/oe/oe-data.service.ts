import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
 private url = '../../../../assets/data/oeList.json';
  constructor(private http: HttpClient) {}
  getOEList(): Observable<OEList> {
    return this.http.get<OEList>(this.url);
  }
}
export class OEList {
  title: string;
  isDisabled: boolean;
  imgHref: string;
}
