import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfigUtil } from 'src/app/core/helpers/app-config-util';

@Injectable()
export class NotificationService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone, private configUtil: AppConfigUtil) { }

  successStyles = ['snackbar-common', 'success-snackbar'];
  infoStyles = ['snackbar-common', 'info-snackbar'];
  warningStyles = ['snackbar-common', 'warning-snackbar'];
  errorStyles = ['snackbar-common', 'error-snackbar'];
  successMessageDuration = this.configUtil.getSuccessMessageDurationInMillSec();
  infoMessageDuration = this.configUtil.getInfoMessageDurationInMillSec();
  warningMessageDuration = this.configUtil.getWarningMessageDurationInMillSec();
  errorMessageDuration = this.configUtil.getErrorMessageDurationInMillSec();

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, '', { panelClass: this.successStyles, duration: this.successMessageDuration });
    });
  }

  showInfo(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, '', { panelClass: this.infoStyles, duration: this.infoMessageDuration });
    });
  }

  showWarning(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, '', { panelClass: this.warningStyles, duration: this.warningMessageDuration });
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.snackBar.open(message, 'X', { panelClass: this.errorStyles, duration: this.errorMessageDuration });
    });
  }

}
