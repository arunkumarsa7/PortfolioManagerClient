import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { Globals } from './shared/constant/globals';
import { RouterUtil } from './shared/service/routing/router-util';
import { AppCommonModule } from './common/app-common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';

import {  HTTP_INTERCEPTORS } from '@angular/common/http';
//used to create fake backend
import { fakeBackendProvider } from './shared/_helpers';


import { BasicAuthInterceptor, ErrorInterceptor } from './shared/_helpers';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login';
@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [ BrowserModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppCommonModule,
    HomeModule,
    PortfolioModule,
    LoginModule,FormsModule,ReactiveFormsModule
  ],
  providers: [Globals, RouterUtil, { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
