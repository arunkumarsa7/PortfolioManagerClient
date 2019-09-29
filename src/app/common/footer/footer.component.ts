import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../utils/globals';
import { AppSettings } from '../utils/AppSettings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  globals: Globals;
  public backFlowValid = false;

  constructor(private router: Router, globals: Globals) { this.globals = globals; }

  ngAfterViewInit(): void {
  }

  public showBackPage() {
    const currentPage = this.globals.appPage;
    const currentPageIndex = AppSettings.portfolioAppPages.indexOf(currentPage);
    const backPage = AppSettings.portfolioAppPages[currentPageIndex - 1];
    this.globals.appPage = backPage;
    this.router.navigateByUrl(AppSettings.portfolioAppPageUrls[currentPageIndex - 1], { skipLocationChange: true });
  }

  public getVisibility(): String {
    if(this.globals.appPage==AppSettings.homePageKey){
      return "hidden";
    }else{
      return "visible";
    }
  }

}
