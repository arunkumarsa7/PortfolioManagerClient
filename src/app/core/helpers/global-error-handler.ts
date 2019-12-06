import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { MessagesUtil } from 'src/app/core/helpers/messages-util';
import { AppConstants } from 'src/app/shared/constant/app-constants';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private facadeService: FacadeService, private msgUtil: MessagesUtil) { }

    handleError(error: Error | HttpErrorResponse) {
        let message: string;
        let stackTrace: string;

        if (error instanceof HttpErrorResponse) {
            // Server Error
            message = this.facadeService.getServerMessage(error);
            stackTrace = this.facadeService.getServerStack(error);
            this.facadeService.notifyError(message);
        } else {
            // Client Error
            message = this.facadeService.getClientMessage(error);
            stackTrace = this.facadeService.getClientStack(error);
            this.handleClientSideErrorMessages(message);
        }

        // Always log errors
        this.facadeService.logError(message, stackTrace);
    }

    private handleClientSideErrorMessages(errorMessage: string) {
        switch (errorMessage) {
            case 'Unauthorized': {
                errorMessage = this.msgUtil.getErrorMessage(AppConstants.ERROR_MSG_USER_NOT_LOGGED_IN);
                break;
            }
            default: {
                errorMessage = errorMessage;
                break;
            }
        }
        this.facadeService.notifyError(errorMessage);
    }

}
