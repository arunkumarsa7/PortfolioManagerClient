import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { Globals } from './shared/constant/globals';
import { RouterUtil } from './core/helpers/router-util';
import { AppCommonModule } from './common/app-common.module';
import { ServicesModule } from './modules/service/services.module';
import { GlobalErrorHandler } from './core/helpers/global-error-handler';
import { ServerErrorInterceptor } from './core/interceptors/server-error-interceptor';
import { MessagesUtil } from './core/helpers/messages-util';
import { AppConfigUtil } from './core/helpers/app-config-util';
import { TokenInterceptor } from './core/interceptors/token-interceptor';
import { LoginModule } from './core/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    AppCommonModule,
    HomeModule,
    PortfolioModule,
    ServicesModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    LoginModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    MessagesUtil, AppConfigUtil,
    { provide: APP_INITIALIZER, useFactory: initializeMessageUtil, deps: [MessagesUtil], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppConfig, deps: [AppConfigUtil], multi: true },
    Globals, RouterUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeMessageUtil(messages: MessagesUtil, appConfig: AppConfigUtil) {
  return () => messages.load();
}

export function initializeAppConfig(appConfig: AppConfigUtil) {
  return () => appConfig.load();
}
