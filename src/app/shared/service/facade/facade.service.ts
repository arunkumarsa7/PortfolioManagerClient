import { Injectable, Injector } from '@angular/core';
import { DashboardService } from 'src/app/shared/service/data/dashboard/dashboard.service';
import { ServiceOfferingService } from 'src/app/shared/service/data/service-offering/service-offering.service';
import { PortfolioService } from 'src/app/shared/service/data/portfolio/portfolio.service';
import { OEDataService, OEList } from 'src/app/shared/service/data/oe/oe-data.service';
import { Observable } from 'rxjs';

@Injectable()
export class FacadeService {
    private dashboardService: DashboardService;
    private serviceOfferingService: ServiceOfferingService;
    private portfolioService: PortfolioService;
    private oeDataService: OEDataService;

    constructor(private injector: Injector) { }

    public get getDashboardService(): DashboardService {
        if (!this.dashboardService) {
            this.dashboardService = this.injector.get(DashboardService);
        }
        return this.dashboardService;
    }

    public get getServiceOfferingService(): ServiceOfferingService {
        if (!this.serviceOfferingService) {
            this.serviceOfferingService = this.injector.get(ServiceOfferingService);
        }
        return this.serviceOfferingService;
    }

    public get getPortfolioService(): PortfolioService {
        if (!this.portfolioService) {
            this.portfolioService = this.injector.get(PortfolioService);
        }
        return this.portfolioService;
    }

    public get getOEDataService(): OEDataService {
        if (!this.oeDataService) {
            this.oeDataService = this.injector.get(OEDataService);
        }
        return this.oeDataService;
    }

    getProjects() {
        return this.getDashboardService.getProjects();
    }

    getSubProjects() {
        return this.getDashboardService.getSubProjects();
    }

    getProjectList() {
        return this.getDashboardService.getProjectList();
    }

    getServiceOfferings(oeId: number) {
        return this.getServiceOfferingService.getServiceOfferings(oeId);
    }

    getPortfolios(serviceOfferingId: number) {
        return this.getPortfolioService.getPortfolios(serviceOfferingId);
    }

    getOEList(): Observable<OEList> {
        return this.getOEDataService.getOEList();
    }

}
