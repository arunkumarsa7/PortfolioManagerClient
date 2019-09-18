import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServiceDescriptionComponent } from './service-description/service-description.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ServiceDescriptionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
