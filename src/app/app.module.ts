import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { PortfolioSubComponent } from './portfolio-sub/portfolio-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PortfolioSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    DashboardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
