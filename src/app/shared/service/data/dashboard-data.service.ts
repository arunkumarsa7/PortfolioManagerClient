import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectInfo } from '../../../shared/models/project-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  private baseUrl = 'http://localhost:8080/healthApp/getProjectsByPortfolio?portfolioId=40';
  project$: ProjectInfo;
 

  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get('https://my-json-server.typicode.com/navas-infobreez/FakeServer/project');
  }

  getSubProjects() {
    return this.http.get('https://my-json-server.typicode.com/navas-infobreez/FakeServer/subProject');
    
  }

  getProjectList(): Observable<any> { 
    return this.http.get(`${this.baseUrl}`);
  }

}
