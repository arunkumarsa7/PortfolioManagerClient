import { Injectable } from '@angular/core';
import { Globals } from '../../constant/globals';
import { AppConstants } from '../../constant/app-constants';
import { PageInfo } from '../../../shared/models/page-info';
import { Router } from '@angular/router';

@Injectable()
export class RouterUtil {
    globals: Globals;
    constructor(globals: Globals, private router: Router) {
        this.globals = globals;
    }
    private getNextPageInfo() {
        const nextPageIndex = AppConstants.portfolioAppPages.indexOf(this.globals.appPage) + 1;
        const nextPageUrl = AppConstants.portfolioAppPageUrls[nextPageIndex];
        const nextPage = AppConstants.portfolioAppPages[nextPageIndex];
        return { pageIndex: nextPageIndex, pageUrl: nextPageUrl, pageName: nextPage };
    }
    private getPreviousPageInfo() {
        const previousPageIndex = AppConstants.portfolioAppPages.indexOf(this.globals.appPage) - 1;
        const previousPageUrl = AppConstants.portfolioAppPageUrls[previousPageIndex];
        const previousPage = AppConstants.portfolioAppPages[previousPageIndex];
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
