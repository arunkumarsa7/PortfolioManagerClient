import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Globals } from '../../common/utils/globals';
import { AppSettings } from '../../common/utils/AppSettings';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './dashboard-projects.component.html',
  styleUrls: ['./dashboard-projects.component.css']
})
export class DashboardProjectsComponent implements OnInit {
  subProjects$: object;
  globals: Globals;

  constructor(private data: DataService, private router: Router, globals: Globals) { this.globals = globals;}

  ngOnInit() {
    this.data.getSubProjects().subscribe(data => this.subProjects$ = data)
  }

  public showDatasourcing(event: Event) {
    this.globals.appPage = AppSettings.datasourcingPageKey;
    this.router.navigateByUrl('/portfolio/projects/dashboard/datasourcing', { skipLocationChange: true });
  }

}
