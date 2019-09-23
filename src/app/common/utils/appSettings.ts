import { Component } from '@angular/core';

export class AppSettings {
    public static defaultOE = 'DE';
    public static defaultPageKey = 'home';
    public static homePageKey = 'home';
    public static portfolioPageKey = 'portfolio';
    public static projectsPageKey = 'projects';
    public static projectDashboardPageKey = 'projectDashboard';
    public static datasourcingPageKey = 'datasourcing';
    public static portfolioAppPages = [AppSettings.homePageKey, AppSettings.portfolioPageKey, AppSettings.projectsPageKey, AppSettings.projectDashboardPageKey, AppSettings.datasourcingPageKey];
    public static portfolioAppPageUrls = ['', 'portfolio', 'portfolio/projects', 'portfolio/projects/dashboard', 'portfolio/projects/dashboard/datasourcing'];
}
