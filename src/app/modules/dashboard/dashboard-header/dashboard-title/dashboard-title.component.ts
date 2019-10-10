import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FacadeService } from '../../../../shared/service/facade/facade.service';
import { ProjectInfo } from '../../../../shared/models/project-info';
@Component({
  selector: 'app-dashboard-title',
  templateUrl: './dashboard-title.component.html',
  styleUrls: ['./dashboard-title.component.css']
})
export class DashboardTitleComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  project$: ProjectInfo;

  constructor(private facadeService: FacadeService) { }

  ngOnInit() {
    this.subscription = this.facadeService.getProject().subscribe((data: ProjectInfo) => this.project$ = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
