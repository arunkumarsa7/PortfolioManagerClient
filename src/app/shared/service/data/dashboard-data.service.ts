import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectInfo } from '../../../shared/models/project-info';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  project$: ProjectInfo;

  constructor(private http: HttpClient) { }

  getProject() {
    return this.http.get('https://my-json-server.typicode.com/navas-infobreez/FakeServer/project');
  }

  getSubProjects() {
    return this.http.get('https://my-json-server.typicode.com/navas-infobreez/FakeServer/subProject');
  }

}
