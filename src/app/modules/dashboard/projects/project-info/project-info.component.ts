import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, } from 'rxjs';
import { RouterUtil } from 'src/app/core/helpers/router-util';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IProjectDetails } from 'src/app/shared/models/iproject-details';

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
    this.subscription = this.facadeService.getProjectsByPortfolio(1).subscribe(data => this.projectDetails$ = data.result);
  }

  private unsubscribeServices() {
    this.subscription.unsubscribe();
  }

  public showDatasourcing() {
    this.routerUtil.navigateToNextPage();
  }

}
