import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/constant/globals';
import { AppConstants } from 'src/app/shared/constant/app-constants';
import { IPageInfo } from 'src/app/shared/models/ipage-info';

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
        const nextPageInfo: IPageInfo = this.getNextPageInfo();
        this.globals.appPage = nextPageInfo.pageName;
        this.router.navigateByUrl(nextPageInfo.pageUrl, { skipLocationChange: true });
    }
    public navigateToPreviousPage() {
        const previousPageInfo: IPageInfo = this.getPreviousPageInfo();
        this.globals.appPage = previousPageInfo.pageName;
        this.router.navigateByUrl(previousPageInfo.pageUrl, { skipLocationChange: true });
    }
}
