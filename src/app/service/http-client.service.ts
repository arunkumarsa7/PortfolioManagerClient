import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeComponent } from '../employee/employee.component';

export class Employee {
  constructor(public empId: string,
    public name: string,
    public designation: string,
    public salary: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(){
    return this.httpClient.get<EmployeeComponent[]>('http://localhost:8080/employees')
  }
}
