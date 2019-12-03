import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { AppConstants } from 'src/app/shared/constant/app-constants';


@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private facadeService: FacadeService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1), catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.facadeService.logout();
          this.router.navigate([AppConstants.loginPageUrl]);
        }
        const errorMsg = error.error.message || error.statusText;
        return throwError(errorMsg);
      })
    );
  }

}
