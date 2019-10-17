import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { Globals } from './shared/constant/globals';
import { RouterUtil } from './shared/service/routing/router-util';
import { AppCommonModule } from './common/app-common.module';
import { ServicesModule } from './modules/service/services.module';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './shared/error/GlobalErrorHandler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppCommonModule,
    HomeModule,
    PortfolioModule,
    ServicesModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    Globals, RouterUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
