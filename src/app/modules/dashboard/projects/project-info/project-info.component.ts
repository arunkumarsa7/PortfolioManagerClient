import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, } from 'rxjs';
import { FacadeService } from '../../../../shared/service/facade/facade.service';
import { ISubprojectInfo } from '../../../../shared/models/isubproject-info';
import { RouterUtil } from '../../../../shared/service/routing/router-util';
import { IProjectDetails } from '../../../../shared/models/iproject-details';

@Component({
  selector: 'app-sub-project-table',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  projectDetails$: IProjectDetails[];

  constructor(private facadeService: FacadeService, private routerUtil: RouterUtil) { }

  ngOnInit() {
    this.subscribeServices();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }

  private subscribeServices() {
    this.subscription = this.facadeService.getProjectList().subscribe((data: IProjectDetails[]) => this.projectDetails$ = data);
  }

  private unsubscribeServices() {
    this.subscription.unsubscribe();
  }

  public showDatasourcing() {
    this.routerUtil.navigateToNextPage();
  }

}
