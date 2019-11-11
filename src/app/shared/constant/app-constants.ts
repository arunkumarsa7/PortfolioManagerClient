import { HttpHeaders } from '@angular/common/http';

export class AppConstants {
  /**
   * Page navigation constants
   */
  public static defaultOE = 'DE';
  public static defaultPageKey = 'home';
  public static homePageKey = 'home';
  public static portfolioPageKey = 'portfolio';
  public static projectsPageKey = 'projects';
  public static dashboardPageKey = 'projectDashboard';
  public static datasourcingPageKey = 'datasourcing';
  public static contractsPageKey = 'contracts';
  /**
   * Routing constants
   * Default URL for all routing modules in this application, any changes here will break entire navigation
   */
  public static homePageUrl = '';
  public static pathMatchFull = 'full';
  public static anyPageUrl = '**';
  public static portfolioPageUrl = 'portfolio';
  public static projectsPageUrl = 'portfolio/projects';
  public static dashboardPageUrl = 'portfolio/projects/dashboard';
  public static datasourcingPageUrl = 'portfolio/projects/dashboard/datasourcing';
  public static contractsPageUrl = 'portfolio/projects/dashboard/contracts';
  // tslint:disable-next-line: max-line-length
  public static portfolioAppPages = [AppConstants.homePageKey, AppConstants.portfolioPageKey, AppConstants.projectsPageKey, AppConstants.dashboardPageKey, AppConstants.datasourcingPageKey, AppConstants.contractsPageKey];
  // tslint:disable-next-line: max-line-length
  public static portfolioAppPageUrls = [AppConstants.homePageUrl, AppConstants.portfolioPageUrl, AppConstants.projectsPageUrl, AppConstants.dashboardPageUrl, AppConstants.datasourcingPageUrl, AppConstants.contractsPageUrl];
  /**
   * Application constants
   */
  public static baseUrl = 'http://localhost:8080/portfolio-manager/';
}

export let RoutingEnumConstants = {
  Home: {
    key: 'home',
    url: ''
  },
  DashBoard: {
    key: 'projectDashboard',
    url: 'portfolio/projects/dashboard'
  }
};

export interface EnumLayout {
  key: string;
  url: string;
}

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
