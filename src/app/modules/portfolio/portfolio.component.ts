import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Globals } from 'src/app/shared/constant/globals';
import { RouterUtil } from 'src/app/shared/service/routing/router-util';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IServiceOffering } from 'src/app/shared/models/iservice-offering';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  serviceOfferings$: IServiceOffering;
  globals: Globals;
  showPortfolio = false;
  showProjects = false;

  constructor(private routerUtil: RouterUtil, globals: Globals, private facadeService: FacadeService) {
    this.globals = globals;
  }

  ngOnInit() {
    this.subscribeServices();
    this.updateToolbarAppTitle();
    this.updateViewPage();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }

  private subscribeServices() {
    this.subscription = this.facadeService.getServiceOfferings().subscribe((data: IServiceOffering) => this.serviceOfferings$ = data);
  }

  private unsubscribeServices() {
    this.subscription.unsubscribe();
  }

  private updateViewPage() {
    const currentPage = this.globals.appPage;
    if (AppConstants.portfolioPageKey === currentPage) {
      this.showPortfolio = true;
      this.showProjects = false;
    } else if (AppConstants.projectsPageKey === currentPage) {
      this.showPortfolio = false;
      this.showProjects = true;
    }
  }

  private updateToolbarAppTitle() {
    const elem: HTMLElement = document.getElementById('appTitle');
    elem.innerHTML = AppComponent.title + ' | ' + this.globals.currentOE;
  }

  public handlePortFolioClickEvent(event: Event) {
    this.routerUtil.navigateToNextPage();
  }

  public handleProjectClickEvent(event: Event) {
    this.routerUtil.navigateToNextPage();
  }

}
