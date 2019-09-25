import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Globals } from '../common/utils/globals';
import { AppSettings } from '../common/utils/AppSettings';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  globals: Globals;

  constructor(private router: Router, globals: Globals) {
    this.globals = globals;
  }

  ngOnInit() {
    this.updateToolbarAppTitle();
  }

  private updateToolbarAppTitle() {
    const elem: HTMLElement = document.getElementById('appTitle');
    elem.innerHTML = AppComponent.title + ' | ' + this.globals.currentOE;
  }

  public handlePortFolioClickEvent(event: Event) {
    const currentPage = this.globals.appPage;
    if (AppSettings.portfolioPageKey === currentPage) {
      this.showProjects();
    } else if (AppSettings.projectsPageKey === currentPage) {
      this.showProjectDashboard();
    }
  }

  private showProjects() {
    this.globals.appPage = AppSettings.projectsPageKey;
    this.router.navigateByUrl('/portfolio/projects', { skipLocationChange: true });
  }

  private showProjectDashboard() {
    this.globals.appPage = AppSettings.projectDashboardPageKey;
    this.router.navigateByUrl('portfolio/projects/dashboard', { skipLocationChange: true });
  }

}
