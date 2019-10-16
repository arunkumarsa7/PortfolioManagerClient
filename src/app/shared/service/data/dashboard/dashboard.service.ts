import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectInfo } from 'src/app/shared/models/iproject-info';
import { ISubprojectInfo } from 'src/app/shared/models/isubproject-info';
import { IProjectDetails } from 'src/app/shared/models/iproject-details';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = 'http://localhost:8080/healthApp/getProjectsByPortfolio?portfolioId=40';

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<IProjectInfo>('https://my-json-server.typicode.com/navas-infobreez/FakeServer/project');
  }

  getSubProjects() {
    return this.http.get<ISubprojectInfo>('https://my-json-server.typicode.com/navas-infobreez/FakeServer/subProject');
  }

  getProjectList() {
    return this.http.get<IProjectDetails>(`${this.baseUrl}`);
  }

}
