import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { AppConfigUtil } from 'src/app/core/helpers/app-config-util';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeOutComponent {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';

  public modalRef: BsModalRef;

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;

  // tslint:disable-next-line: max-line-length
  constructor(private idle: Idle, private keepalive: Keepalive, private router: Router, private facadeService: FacadeService, private appConfig: AppConfigUtil) {

    idle.setIdle(this.appConfig.getUserIdleTimeOutInSec());
    idle.setTimeout(this.appConfig.getUserTimeOutInSec());
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle!';
      console.log(this.idleState);
      this.reset();
    });

    idle.onTimeout.subscribe(() => {
      this.childModal.hide();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);
      this.router.navigate([AppConstants.loginPageUrl]);
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
      console.log(this.idleState);
      this.childModal.show();
    });

    idle.onTimeoutWarning.subscribe((countdown: string) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
      console.log(this.idleState);
    });

    this.keepalive.interval(this.appConfig.getUserKeepAliveInSec());
    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());
    this.facadeService.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        idle.watch();
        this.timedOut = false;
      } else {
        idle.stop();
      }
    });

  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    this.facadeService.logout();
  }

}
