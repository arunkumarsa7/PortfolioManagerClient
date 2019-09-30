
export class AppConstants {
    public static defaultOE = 'DE';
    public static defaultPageKey = 'home';
    public static homePageKey = 'home';
    public static portfolioPageKey = 'portfolio';
    public static projectsPageKey = 'projects';
    public static dashboardPageKey = 'projectDashboard';
    public static datasourcingPageKey = 'datasourcing';
    public static homePageUrl = '';
    public static pathMatchFull = 'full';
    public static anyPageUrl = '**';
    public static portfolioPageUrl = 'portfolio';
    public static projectsPageUrl = 'portfolio/projects';
    public static dashboardPageUrl = 'portfolio/projects/dashboard';
    public static datasourcingPageUrl = 'portfolio/projects/dashboard/datasourcing';
    public static portfolioAppPages = [AppConstants.homePageKey, AppConstants.portfolioPageKey, AppConstants.projectsPageKey, AppConstants.dashboardPageKey, AppConstants.datasourcingPageKey];
    public static portfolioAppPageUrls = [AppConstants.homePageUrl, AppConstants.portfolioPageUrl, AppConstants.projectsPageUrl, AppConstants.dashboardPageUrl, AppConstants.datasourcingPageUrl];
}
