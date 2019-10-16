export class AppConstants {
  public static defaultOE = 'DE';
  public static defaultPageKey = 'home';
  public static homePageKey = 'home';
  public static portfolioPageKey = 'portfolio';
  public static projectsPageKey = 'projects';
  public static dashboardPageKey = 'projectDashboard';
  public static datasourcingPageKey = 'datasourcing';
  public static contractsPageKey = 'contracts';
  // Default URL for all routing modules in this application, any changes here will break entire navigation
  public static homePageUrl = '';
  public static pathMatchFull = 'full';
  public static anyPageUrl = '**';
  public static portfolioPageUrl = 'portfolio';
  public static projectsPageUrl = 'portfolio/projects';
  public static dashboardPageUrl = 'portfolio/projects/dashboard';
  public static datasourcingPageUrl = 'portfolio/projects/dashboard/datasourcing';
  public static contractsPageUrl = 'portfolio/projects/dashboard/contracts';
  public static portfolioAppPages = [AppConstants.homePageKey, AppConstants.portfolioPageKey, AppConstants.projectsPageKey, AppConstants.dashboardPageKey, AppConstants.datasourcingPageKey, AppConstants.contractsPageKey];
  public static portfolioAppPageUrls = [AppConstants.homePageUrl, AppConstants.portfolioPageUrl, AppConstants.projectsPageUrl, AppConstants.dashboardPageUrl, AppConstants.datasourcingPageUrl, AppConstants.contractsPageUrl];
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
