import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Globals } from 'src/app/shared/constant/globals';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { MessagesUtil } from 'src/app/shared/service/messages/messages-util';
import { RouterUtil } from 'src/app/shared/service/routing/router-util';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { IOperatingEntity } from 'src/app/shared/models/ioperating-entity';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  oeSubscription: Subscription;
  oeList$: IOperatingEntity[];
  hasServiceOfferings: boolean;
  globals: Globals;

  constructor(private routerUtil: RouterUtil, globals: Globals, private facadeService: FacadeService, private messages: MessagesUtil) {
    this.globals = globals;
  }

  ngAfterViewInit(): void {
    document.getElementById('appTitle').innerHTML = AppComponent.title;
    this.clearGlobalValues();
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
    this.checkServiceOfferingsAndNavigate(event.currentTarget as HTMLElement);
  }

  private checkServiceOfferingsAndNavigate(htmlElement: HTMLElement) {
    const oeId = Number(htmlElement.dataset.oe_id);
    this.facadeService.doesOEHasServiceOfferings(oeId).then(data => {
      if (data.result) {
        this.globals.currentOE = htmlElement.id;
        this.globals.currentOEId = oeId;
        this.routerUtil.navigateToNextPage();
      } else {
        this.facadeService.notifyError(this.messages.getErrorMessage('ERROR_MSG_NO_SERVICE_OFFERINGS'));
      }
    });
  }

  private clearGlobalValues() {
    this.globals.currentOE = AppConstants.defaultOE;
    this.globals.appPage = AppConstants.defaultPageKey;
    this.globals.currentServiceOffering = '';
    this.globals.currentProject = '';
    this.globals.currentOEId = 0;
    this.globals.currentServiceOfferingId = 0;
    this.globals.currentPortfolioId = 0;
  }

}
