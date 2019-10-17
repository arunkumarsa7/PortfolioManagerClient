import { HttpInterceptor, HttpEvent,HttpRequest,HttpHandler,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {retry, catchError} from 'rxjs/operators';


@Injectable()
export class SericeErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
       return next.handle(request).pipe(
           retry(2),catchError((error:HttpErrorResponse) =>{
return throwError(error);
           })
       );
    }


}