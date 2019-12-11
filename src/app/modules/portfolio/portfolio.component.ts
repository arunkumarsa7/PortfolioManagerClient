import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Globals } from 'src/app/shared/constant/globals';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { RouterUtil } from 'src/app/core/helpers/router-util';
import { MessagesUtil } from 'src/app/core/helpers/messages-util';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { SnackBarService } from 'src/app/common/snackbar/snack-bar.service';
import { IServiceOffering } from 'src/app/shared/models/iservice-offering';
import { IPortfolio } from 'src/app/shared/models/iportfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  serviceOfferings$: IServiceOffering[];
  portfolios$: IPortfolio[];
  globals: Globals;
  showPortfolio = false;
  showProjects = false;

  // tslint:disable-next-line: max-line-length
  constructor(private routerUtil: RouterUtil, globals: Globals, private facadeService: FacadeService, private snackbar: SnackBarService, private messages: MessagesUtil) {
    this.globals = globals;
  }

  ngOnInit() {
    this.updateViewPage();
    this.updateToolbarAppTitle();
  }

  private updateViewPage() {
    const currentPage = this.globals.appPage;
    if (AppConstants.portfolioPageKey === currentPage) {
      this.showPortfolio = true;
      this.showProjects = false;
      this.facadeService.getServiceOfferings(this.globals.currentOEId).subscribe(data => this.serviceOfferings$ = data.result);
    } else if (AppConstants.projectsPageKey === currentPage) {
      this.showPortfolio = false;
      this.showProjects = true;
      this.facadeService.getPortfolios(this.globals.currentServiceOfferingId).subscribe(response => this.portfolios$ = response.result);
    }
  }

  private updateToolbarAppTitle() {
    const elem: HTMLElement = document.getElementById('appTitle');
    elem.innerHTML = AppComponent.title + ' | ' + this.globals.currentOE;
  }

  public handleServiceOfferingClickEvent(event: Event) {
    this.checkPortfoliosAndNavigate(event.currentTarget as HTMLElement);
  }

  public handlePortfoioClickEvent(event: Event) {
    this.checkProjectsAndNavigate(event.currentTarget as HTMLElement);
  }

  private checkPortfoliosAndNavigate(htmlElement: HTMLElement) {
    const soId = Number(htmlElement.dataset.so_id);
    this.facadeService.doesServiceOfferingHasPortfolios(soId).then(data => {
      if (data.result) {
        this.globals.currentServiceOfferingId = soId;
        this.globals.currentServiceOffering = htmlElement.getAttribute('title');
        this.routerUtil.navigateToNextPage();
      } else {
        this.snackbar.openSnackBar(this.messages.getErrorMessage('ERROR_MSG_NO_PORTFOLIOS'), AppConstants.APP_ERROR_MSG);
      }
    });
  }

  private checkProjectsAndNavigate(htmlElement: HTMLElement) {
    const portfolioId = Number(htmlElement.dataset.portfolio_id);
    this.facadeService.doesPortfoioHasProjects(portfolioId).then(data => {
      if (data.result) {
        this.globals.currentPortfolioId = portfolioId;
        this.globals.currentProject = htmlElement.getAttribute('title');
        this.routerUtil.navigateToNextPage();
      } else {
        this.snackbar.openSnackBar(this.messages.getErrorMessage('ERROR_MSG_NO_PROJECT_DATA'), AppConstants.APP_ERROR_MSG);
      }
    });
  }

}
