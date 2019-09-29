import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DatasourcingComponent } from './modules/dashboard/datasourcing/datasourcing.component';
import { AppSettings } from './shared/constant/app-settings';

const routes: Routes = [
  { path: AppSettings.homePageUrl, component: HomeComponent },
  { path: AppSettings.datasourcingPageUrl, component: DatasourcingComponent },
  { path: AppSettings.dashboardPageUrl, component: DashboardComponent },
  { path: AppSettings.projectsPageUrl, component: PortfolioComponent },
  { path: AppSettings.portfolioPageUrl, component: PortfolioComponent },
  { path: AppSettings.anyPageUrl, redirectTo: AppSettings.homePageUrl, pathMatch: AppSettings.pathMatchFull }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
