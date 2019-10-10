import { Injectable, Injector } from '@angular/core';
import { DashboardService } from '../data/dashboard/dashboard.service';
import { ServiceOfferingService } from '../data/service-offering/service-offering.service';

@Injectable()
export class FacadeService {
    private dashboardService: DashboardService;
    private serviceOfferingService: ServiceOfferingService;

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

    constructor(private injector: Injector) { }

    getProjects() {
        return this.getDashboardService.getProjects();
    }

    getSubProjects() {
        return this.getDashboardService.getSubProjects();
    }

    getServiceOfferings() {
        return this.getServiceOfferingService.getServiceOfferings();
    }

}
