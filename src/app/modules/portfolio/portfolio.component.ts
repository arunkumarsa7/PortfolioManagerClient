import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { Globals } from '../../shared/constant/globals';
import { AppConstants } from '../../shared/constant/app-constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  globals: Globals;
  showPortfolio = false;
  showProjects = false;

  constructor(private router: Router, globals: Globals) {
    this.globals = globals;
  }

  ngOnInit() {
    this.updateToolbarAppTitle();
    this.updateViewPage();
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
    const currentPage = this.globals.appPage;
    if (AppConstants.portfolioPageKey === currentPage) {
      this.showProjectsPage();
    } else if (AppConstants.projectsPageKey === currentPage) {
      this.showProjectDashboard();
    }
  }

  private showProjectsPage() {
    this.globals.appPage = AppConstants.projectsPageKey;
    this.router.navigateByUrl('/portfolio/projects', { skipLocationChange: true });
  }

  private showProjectDashboard() {
    this.globals.appPage = AppConstants.dashboardPageKey;
    this.router.navigateByUrl('portfolio/projects/dashboard', { skipLocationChange: true });
  }

}
