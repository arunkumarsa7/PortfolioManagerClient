import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.css']
})
export class DashboardProjectsComponent implements OnInit {
  subProjects$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data)
  }

}
