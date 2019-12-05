import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimeOutComponent } from './timeout/timeout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TimeOutComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [HeaderComponent, FooterComponent, TimeOutComponent]
})

export class AppCommonModule { }
