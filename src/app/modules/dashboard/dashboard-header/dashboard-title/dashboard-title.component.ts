import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Globals } from 'src/app/shared/constant/globals';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IProjectInfo } from 'src/app/shared/models/iproject-info';

@Component({
  selector: 'app-dashboard-title',
  templateUrl: './dashboard-title.component.html',
  styleUrls: ['./dashboard-title.component.css']
})
export class DashboardTitleComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  projects$: IProjectInfo;
  globals: Globals;

  constructor(private facadeService: FacadeService, globals: Globals) { this.globals = globals; }

  ngOnInit() {
    this.subscribeServices();
    this.updateDashboardTitle();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }

  private subscribeServices() {
    this.subscription = this.facadeService.getProjects().subscribe(data => this.projects$ = data);
  }

  private unsubscribeServices() {
    this.subscription.unsubscribe();
  }

  private updateDashboardTitle() {
    const elem: HTMLElement = document.getElementById('dashboardTitle');
    elem.innerHTML = this.globals.currentProject + ' :: ' + 'Data sourcing';
  }

}
