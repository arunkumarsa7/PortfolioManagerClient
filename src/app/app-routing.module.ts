import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { AppConstants } from './shared/constant/app-constants';

const routes: Routes = [
  {
    path: AppConstants.dashboardPageUrl, loadChildren:
      './modules/dashboard/dashboard.module#DashboardModule'
  },
  { path: AppConstants.projectsPageUrl, component: PortfolioComponent, data: { animation: AppConstants.projectsPageKey } },
  { path: AppConstants.portfolioPageUrl, component: PortfolioComponent, data: { animation: AppConstants.portfolioPageKey } },
  { path: AppConstants.homePageUrl, component: HomeComponent, data: { animation: AppConstants.homePageKey } },
  { path: AppConstants.anyPageUrl, redirectTo: AppConstants.homePageUrl, pathMatch: AppConstants.pathMatchFull }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
