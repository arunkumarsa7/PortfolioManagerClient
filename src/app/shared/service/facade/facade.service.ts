import { Injectable, Injector } from '@angular/core';
import { DashboardDataService } from '../data/dashboard-data.service';

@Injectable()
export class FacadeService {
    private dashboardDataService: DashboardDataService;

    public get getDashboardDataService(): DashboardDataService {
        if (!this.dashboardDataService) {
            this.dashboardDataService = this.injector.get(DashboardDataService);
        }
        return this.dashboardDataService;
    }

    constructor(private injector: Injector) { }

    getProject() {
        return this.getDashboardDataService.getProject();
    }

    getSubProjects() {
        return this.getDashboardDataService.getSubProjects();
    }
}
