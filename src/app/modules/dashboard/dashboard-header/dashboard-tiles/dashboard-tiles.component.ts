import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FacadeService } from '../../../../shared/service/facade/facade.service';
import { IProjectInfo } from '../../../../shared/models/iproject-info';

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.css']
})
export class DashboardTilesComponent implements OnInit, OnDestroy {
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
