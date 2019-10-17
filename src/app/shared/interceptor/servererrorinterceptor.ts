import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';


@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(request).pipe(
           retry(1), catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              // JWT refresh
            } else {return throwError(error); }

           })
       );
    }


}
