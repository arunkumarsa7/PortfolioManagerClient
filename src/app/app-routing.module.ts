import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DatasourcingComponent } from './modules/dashboard/datasourcing/datasourcing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/projects/dashboard/datasourcing', component: DatasourcingComponent },
  { path: 'portfolio/projects/dashboard', component: DashboardComponent },
  { path: 'portfolio/projects', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
