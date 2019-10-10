import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Globals } from '../../shared/constant/globals';
import { AppConstants } from '../../shared/constant/app-constants';
import { RouterUtil } from '../../shared/service/routing/router-util';
import { OEList } from 'src/app/shared/service/data/oe-data.service';
import { FacadeService } from './../../shared/service/facade/facade.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  globals: Globals;
  oeList: OEList;
  subscription: Subscription;


  ngAfterViewInit(): void {
    document.getElementById('appTitle').innerHTML = AppComponent.title;
    this.globals.currentOE = AppConstants.defaultOE;
    this.globals.appPage = AppConstants.defaultPageKey;
  }

  constructor(private routerUtil: RouterUtil, globals: Globals, private facade: FacadeService) {
    this.globals = globals;
  }
ngOnInit() {
  this.subscription = this.facade.getOEList().subscribe(data => this.oeList = data);
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}
  public handleHomeButtonClick(event: Event) {
    this.globals.currentOE = (event.currentTarget as Element).id;
    this.routerUtil.navigateToNextPage();
  }

}

