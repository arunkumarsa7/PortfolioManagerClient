import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimeOutComponent } from './timeout/timeout.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TimeOutComponent, SnackbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ModalModule.forRoot()
  ],
  exports: [HeaderComponent, FooterComponent, TimeOutComponent],
  entryComponents: [SnackbarComponent]
})

export class AppCommonModule { }
