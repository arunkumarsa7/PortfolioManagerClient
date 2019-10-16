import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.subscribeServices();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }

  private subscribeServices() {
    this.subscription = this.facadeService.getProjects().subscribe((data: IProjectInfo) => this.projects$ = data);
  }

  private unsubscribeServices() {
    this.subscription.unsubscribe();
  }

}
