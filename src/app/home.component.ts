import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { Globals } from './common/utils/globals';
import { AppSettings } from './common/utils/AppSettings';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
    globals: Globals;

    ngAfterViewInit(): void {
        document.getElementById('appTitle').innerHTML = AppComponent.title;
        this.globals.currentOE = AppSettings.defaultOE;
        this.globals.appPage = AppSettings.defaultPageKey;
    }

    constructor(private router: Router, globals: Globals) {
        this.globals = globals;
    }

    public showPortfolio(event: Event) {
        this.globals.currentOE = (event.currentTarget as Element).id;
        this.globals.appPage = AppSettings.portfolioPageKey;
        this.router.navigateByUrl('/portfolio', { skipLocationChange: true });
    }

}
