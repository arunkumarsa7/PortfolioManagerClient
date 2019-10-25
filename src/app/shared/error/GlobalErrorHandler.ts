import {ErrorHandler, Injectable} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private facadeService: FacadeService) { }
    handleError(error: Error | HttpErrorResponse) {
        let message;
        let stackTrace;

        if (error instanceof HttpErrorResponse) {
            // Server Error
            message = this.facadeService.getServerMessage(error);
            stackTrace = this.facadeService.getServerStack(error);
            this.facadeService.notifyError(message);
        } else {
            // Client Error
            message = this.facadeService.getClientMessage(error);
            stackTrace = this.facadeService.getClientStack(error);
            this.facadeService.notifyError(message);
        }

        // Always log errors
        this.facadeService.logError(message, stackTrace);
    }
}
