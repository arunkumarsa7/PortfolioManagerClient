import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/constant/globals';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { RouterUtil } from 'src/app/core/helpers/router-util';

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
    return (this.globals.appPage === AppConstants.homePageKey) ? 'hidden' : 'visible';
  }

}
