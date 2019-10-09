import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardDataService } from '../../../../shared/service/data/dashboard-data.service';
import { Globals } from '../../../../shared/constant/globals';
import { RouterUtil } from '../../../../shared/service/routing/router-util';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  subProjects$: object;
  globals: Globals;

  constructor(private data: DashboardDataService, private routerUtil: RouterUtil, globals: Globals) { this.globals = globals; }

  ngOnInit() {
    this.subscription = this.data.getSubProjects().subscribe(data => this.subProjects$ = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public showDatasourcing(event: Event) {
    this.routerUtil.navigateToNextPage();
  }

}
