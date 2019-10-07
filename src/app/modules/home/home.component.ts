import { Component, AfterViewInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Globals } from '../../shared/constant/globals';
import { AppConstants } from '../../shared/constant/app-constants';
import { RouterUtil } from '../../shared/service/routing/router-util';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    globals: Globals;

    ngAfterViewInit(): void {
        document.getElementById('appTitle').innerHTML = AppComponent.title;
        this.globals.currentOE = AppConstants.defaultOE;
        this.globals.appPage = AppConstants.defaultPageKey;
    }

    constructor(private routerUtil: RouterUtil, globals: Globals) {
        this.globals = globals;
    }

    public handleHomeButtonClick(event: Event) {
        this.globals.currentOE = (event.currentTarget as Element).id;
        this.routerUtil.navigateToNextPage();
    }

}
