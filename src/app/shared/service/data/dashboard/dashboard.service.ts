import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectInfo } from '../../../models/iproject-info';
import { ISubprojectInfo } from '../../../models/isubproject-info';

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

}
