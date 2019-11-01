import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectInfo } from 'src/app/shared/models/iproject-info';
import { ISubprojectInfo } from 'src/app/shared/models/isubproject-info';
import { IApiResponse } from 'src/app/shared/models/iapi-response';
import { AppConstants, httpOptions } from 'src/app/shared/constant/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<IProjectInfo>('https://my-json-server.typicode.com/navas-infobreez/FakeServer/project');
  }

  getSubProjects() {
    return this.http.get<ISubprojectInfo>('https://my-json-server.typicode.com/navas-infobreez/FakeServer/subProject');
  }

  getProjectKPISummary(portfolioId: number) {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'project/getProjectKPISummary', portfolioId, httpOptions);
  }

  getProjectsByPortfolio(portfolioId: number) {
    return this.http.post<IApiResponse>(`${AppConstants.baseUrl}` + 'project/getProjectsByPortfolio', portfolioId, httpOptions);
  }

}
