import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack;
  }

  getServerMessage(error: HttpErrorResponse): string {
    if (error.status === 404) {
      return 'Server unavailable. Please try after sometime';
    } else {
      return 'Http error response : ' + error.status;
    }
  }

  getServerStack(error: HttpErrorResponse): string {
    // handle stacktrace later
    return 'stack';
  }

}
