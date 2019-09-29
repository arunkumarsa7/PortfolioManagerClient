import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DatasourcingModule } from './modules/dashboard/datasourcing/datasourcing.module';
import { DashboardCommonModule } from './common/dashboard-common.module';
import { Globals } from './shared/constant/globals';
import { RouterUtil } from './shared/service/routing/router-util';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule,
    DashboardModule,
    DashboardCommonModule,
    DatasourcingModule,
    HomeModule,
    PortfolioModule
  ],
  providers: [Globals, RouterUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
