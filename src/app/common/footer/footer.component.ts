import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../../shared/constant/globals';
import { AppSettings } from '../../shared/constant/app-settings';
import { RouterUtil } from '../../shared/service/routing/router-util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  globals: Globals;
  public backFlowValid = false;

  constructor(private router: Router, private routerUtil: RouterUtil, globals: Globals) { this.globals = globals; }

  ngAfterViewInit(): void {
  }

  public showBackPage() {
    this.routerUtil.navigateToPreviousPage();
  }

  public getVisibility(): string {
    return (this.globals.appPage === AppSettings.homePageKey) ? 'hidden' : 'visible';
  }

}
