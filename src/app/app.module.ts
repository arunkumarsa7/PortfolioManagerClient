import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ServiceRecordModule } from './modules/dashboard/service-record/service-record.module';
import { Globals } from './shared/constant/globals';
import { RouterUtil } from './shared/service/routing/router-util';
import { AppCommonModule } from './common/app-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppCommonModule,
    ServiceRecordModule,
    HomeModule,
    PortfolioModule
  ],
  providers: [Globals, RouterUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
