import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Globals } from 'src/app/shared/constant/globals';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { RouterUtil } from 'src/app/shared/service/routing/router-util';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IOperatingEntity } from 'src/app/shared/models/ioperating-entity';
import { ICountry } from 'src/app/shared/models/icountry';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  oeSubscription: Subscription;
  oeList$: IOperatingEntity[];
  hasServiceOfferings: boolean;
  globals: Globals;

  constructor(private routerUtil: RouterUtil, globals: Globals, private facadeService: FacadeService) {
    this.globals = globals;
  }

  ngAfterViewInit(): void {
    document.getElementById('appTitle').innerHTML = AppComponent.title;
    this.globals.currentOE = AppConstants.defaultOE;
    this.globals.appPage = AppConstants.defaultPageKey;
    this.globals.currentServiceOffering = '';
    this.globals.currentProject = '';
  }

  ngOnInit() {
    this.subscribeServices();
  }

  ngOnDestroy() {
    this.unsubscribeServices();
  }

  private subscribeServices() {
    this.oeSubscription = this.facadeService.getOperatingEntities().subscribe(data => this.oeList$ = data.result);
  }

  private unsubscribeServices() {
    this.oeSubscription.unsubscribe();
  }

  public handleHomeButtonClick(event: Event) {
    const oeField = event.currentTarget as HTMLElement;
    this.checkServiceOfferingsAndNavigate(oeField);
  }

  private checkServiceOfferingsAndNavigate(htmlElement: HTMLElement) {
    const oeId = Number(htmlElement.dataset.oeid);
    this.facadeService.doesOEHasServiceOfferings(oeId).then(data => {
      if (data.result) {
        this.globals.currentOE = htmlElement.id;
        this.routerUtil.navigateToNextPage();
      } else {
        this.facadeService.notifyError('No Service Offering(s) configured');
      }
    });
  }

}
