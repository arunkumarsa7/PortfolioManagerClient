
export class AppSettings {
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
    public static portfolioAppPages = [AppSettings.homePageKey, AppSettings.portfolioPageKey, AppSettings.projectsPageKey, AppSettings.dashboardPageKey, AppSettings.datasourcingPageKey];
    public static portfolioAppPageUrls = [AppSettings.homePageUrl, AppSettings.portfolioPageUrl, AppSettings.projectsPageUrl, AppSettings.dashboardPageUrl, AppSettings.datasourcingPageUrl];
}
