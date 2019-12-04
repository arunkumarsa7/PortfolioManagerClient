import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { AppConstants } from './shared/constant/app-constants';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/helpers/auth.guard';

const routes: Routes = [
  { path: AppConstants.dashboardPageUrl, loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
  { path: AppConstants.projectsPageUrl, component: PortfolioComponent },
  { path: AppConstants.portfolioPageUrl, component: PortfolioComponent },
  { path: AppConstants.homePageUrl, component: HomeComponent, canActivate: [AuthGuard] },
  { path: AppConstants.loginPageUrl, component: LoginComponent },
  { path: AppConstants.defaultPageUrl, component: HomeComponent },
  { path: AppConstants.anyPageUrl, redirectTo: AppConstants.defaultPageUrl, pathMatch: AppConstants.pathMatchFull }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
