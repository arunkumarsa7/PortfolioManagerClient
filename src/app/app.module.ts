import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { ServerErrorInterceptor } from './shared/interceptor/servererrorinterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MessagesUtil } from './shared/service/messages/messages-util';

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
    ServicesModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    MessagesUtil,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [MessagesUtil], multi: true },
    Globals, RouterUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeApp(messages: MessagesUtil) {
  return () => messages.load();
}
