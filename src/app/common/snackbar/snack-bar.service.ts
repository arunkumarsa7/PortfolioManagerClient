import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from 'src/app/common/snackbar/snackbar.component';
import { AppConfigUtil } from 'src/app/core/helpers/app-config-util';

@Injectable({ providedIn: 'root' })
export class SnackBarService {

    constructor(private snackBar: MatSnackBar, private zone: NgZone, private configUtil: AppConfigUtil) { }

    public openSnackBar(msg: string, snackType: string) {
        const tempSnackType = snackType !== undefined ? snackType : 'Success';
        this.zone.run(() => {
            this.snackBar.openFromComponent(SnackbarComponent, {
                duration: this.getDurationInMilliSeconds(tempSnackType),
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: this.getClass(tempSnackType),
                data: { message: msg, snackType: tempSnackType }
            });
        });
    }

    private getDurationInMilliSeconds(tempSnackType: string) {
        switch (tempSnackType) {
            case 'Success':
                return this.configUtil.getSuccessMessageDurationInMillSec();
            case 'Error':
                return this.configUtil.getErrorMessageDurationInMillSec();
            case 'Warn':
                return this.configUtil.getWarningMessageDurationInMillSec();
            case 'Info':
                return this.configUtil.getInfoMessageDurationInMillSec();
        }
    }

    private getClass(tempSnackType: string) {
        switch (tempSnackType) {
            case 'Success':
                return ['snackbar-common', 'success-snackbar'];
            case 'Error':
                return ['snackbar-common', 'error-snackbar'];
            case 'Warn':
                return ['snackbar-common', 'warning-snackbar'];
            case 'Info':
                return ['snackbar-common', 'info-snackbar'];
        }
    }

}
