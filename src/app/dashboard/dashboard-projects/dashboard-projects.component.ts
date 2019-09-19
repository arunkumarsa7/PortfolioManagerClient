import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.css']
})
export class DashboardProjectsComponent implements OnInit {
  subProjects$: object;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data)
  }

  public showDatasourcing(event: Event) {
    this.router.navigateByUrl('/portfolio/dashboard/datasourcing', { skipLocationChange: true });
  }

}
