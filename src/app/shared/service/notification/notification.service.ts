import { Injectable, NgZone} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {

  constructor(public snackBar: MatSnackBar, private zone: NgZone) {

   }

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, '', {panelClass: ['success-snackbar'], duration: 5000});
    });
  }
  showInfo(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, '', {panelClass: ['info-snackbar'], duration: 5000});
    });
  }
  showWarning(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, '', {panelClass: ['warning-snackbar'], duration: 5000});
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.snackBar.open(message, 'X', {panelClass: ['error-snackbar'], duration: 50000});
    });

  }
}
