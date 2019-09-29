import { Injectable } from '@angular/core';
import { Globals } from '../../constant/globals';
import { AppSettings } from '../../constant/app-settings';
import { PageInfo } from '../../../models/page-info';
import { Router } from '@angular/router';

@Injectable()
export class RouterUtil {
    globals: Globals;
    constructor(globals: Globals, private router: Router) {
        this.globals = globals;
    }
    private getNextPageInfo() {
        const nextPageIndex = AppSettings.portfolioAppPages.indexOf(this.globals.appPage) + 1;
        const nextPageUrl = AppSettings.portfolioAppPageUrls[nextPageIndex];
        const nextPage = AppSettings.portfolioAppPages[nextPageIndex];
        return { pageIndex: nextPageIndex, pageUrl: nextPageUrl, pageName: nextPage };
    }
    private getPreviousPageInfo() {
        const previousPageIndex = AppSettings.portfolioAppPages.indexOf(this.globals.appPage) - 1;
        const previousPageUrl = AppSettings.portfolioAppPageUrls[previousPageIndex];
        const previousPage = AppSettings.portfolioAppPages[previousPageIndex];
        return { pageIndex: previousPageIndex, pageUrl: previousPageUrl, pageName: previousPage };
    }
    public navigateToNextPage() {
        const nextPageInfo: PageInfo = this.getNextPageInfo();
        this.globals.appPage = nextPageInfo.pageName;
        this.router.navigateByUrl(nextPageInfo.pageUrl, { skipLocationChange: true });
    }
    public navigateToPreviousPage() {
        const previousPageInfo: PageInfo = this.getPreviousPageInfo();
        this.globals.appPage = previousPageInfo.pageName;
        this.router.navigateByUrl(previousPageInfo.pageUrl, { skipLocationChange: true });
    }
}
