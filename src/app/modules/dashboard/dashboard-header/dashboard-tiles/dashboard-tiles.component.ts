import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IProjectInfo } from 'src/app/shared/models/iproject-info';

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.css']
})
export class DashboardTilesComponent implements OnInit, OnDestroy {
  private kpiSummarySubscription: Subscription;
  projectKPISummary$: IProjectInfo;

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.subscribeServices();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }

  private subscribeServices() {
    this.kpiSummarySubscription = this.facadeService.getProjectKPISummary(1).subscribe(data => this.projectKPISummary$ = data.result);
  }

  private unsubscribeServices() {
    this.kpiSummarySubscription.unsubscribe();
  }

}
