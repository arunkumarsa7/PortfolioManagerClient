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
  public static loginPageKey = 'login';
  /**
   * Routing constants
   * Default URL for all routing modules in this application, any changes here will break entire navigation
   */
  public static anyPageUrl = '**';
  public static defaultPageUrl = '';
  public static homePageUrl = 'home';
  public static loginPageUrl = 'login';
  public static pathMatchFull = 'full';
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
  public static accessToken = 'accessToken';
  public static loggedInUser = 'currentUser';
  public static username = 'username';
  // Constants used in application configuration file
  public static APP_USER_IDLE_TIME_IN_SEC = 'APP_USER_IDLE_TIME_IN_SEC';
  public static APP_USER_TIME_OUT_IN_SEC = 'APP_USER_TIME_OUT_IN_SEC';
  public static APP_USER_KEEP_ALIVE_IN_SEC = 'APP_USER_KEEP_ALIVE_IN_SEC';
  public static APP_SHOW_ERROR_MSG_DURATIN_IN_MILLI_SEC = 'APP_SHOW_ERROR_MSG_DURATIN_IN_MILLI_SEC';
  public static APP_SHOW_WARNING_MSG_DURATIN_IN_MILLI_SEC = 'APP_SHOW_WARNING_MSG_DURATIN_IN_MILLI_SEC';
  public static APP_SHOW_INFO_MSG_DURATIN_IN_MILLI_SEC = 'APP_SHOW_INFO_MSG_DURATIN_IN_MILLI_SEC';
  public static APP_SHOW_SUCCESS_MSG_DURATIN_IN_MILLI_SEC = 'APP_SHOW_SUCCESS_MSG_DURATIN_IN_MILLI_SEC';
  // Error constants
  public static APP_SUCCESS_MSG = 'Success';
  public static APP_ERROR_MSG = 'Error';
  public static APP_WARNING_MSG = 'Warn';
  public static APP_INFO_MSG = 'Info';
  // Error message constants
  public static ERROR_MSG_USER_NOT_LOGGED_IN = 'ERROR_MSG_USER_NOT_LOGGED_IN';
  public static ERROR_MSG_INVALID_USERNAME_OR_PASSWORD = 'ERROR_MSG_INVALID_USERNAME_OR_PASSWORD';
}

export interface EnumLayout {
  key: string;
  url: string;
}

export const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Data-Type': 'application/json'
  }
};
