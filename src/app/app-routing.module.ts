import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DatasourcingComponent } from './modules/dashboard/datasourcing/datasourcing.component';
import { AppConstants } from './shared/constant/app-constants';

const routes: Routes = [
  { path: AppConstants.homePageUrl, component: HomeComponent },
  { path: AppConstants.datasourcingPageUrl, component: DatasourcingComponent },
  { path: AppConstants.dashboardPageUrl, component: DashboardComponent },
  { path: AppConstants.projectsPageUrl, component: PortfolioComponent },
  { path: AppConstants.portfolioPageUrl, component: PortfolioComponent },
  { path: AppConstants.anyPageUrl, redirectTo: AppConstants.homePageUrl, pathMatch: AppConstants.pathMatchFull }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
