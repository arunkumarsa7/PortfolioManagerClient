import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FacadeService } from '../../../../shared/service/facade/facade.service';
import { ProjectInfo } from '../../../../shared/models/project-info';

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.css']
})
export class DashboardTilesComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  project$: ProjectInfo;

  constructor(private facadeDataService: FacadeService) { }

  ngOnInit() {
    this.subscription = this.facadeDataService.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
