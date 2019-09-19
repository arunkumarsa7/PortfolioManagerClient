import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServiceDescriptionComponent } from './service-description/service-description.component';



import { DashboardCommonModule } from './common/dashboard-common.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ServiceDescriptionComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    DashboardModule,
    DashboardCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
