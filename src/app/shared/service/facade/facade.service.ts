import { Injectable, Injector } from '@angular/core';
import { DashboardDataService } from '../data/dashboard-data.service';
import { OEDataService, OEList } from 'src/app/shared/service/data/oe-data.service';
import { Observable } from 'rxjs';

@Injectable()
export class FacadeService {
    private dashboardDataService: DashboardDataService;
    private oeDataService: OEDataService;

    public get getDashboardDataService(): DashboardDataService {
        if (!this.dashboardDataService) {
            this.dashboardDataService = this.injector.get(DashboardDataService);
        }
        return this.dashboardDataService;
    }
    public get OEDataService(): OEDataService {
      if (!this.oeDataService) {
        this.oeDataService = this.injector.get(OEDataService);
    }
      return this.oeDataService;
    }

    constructor(private injector: Injector) { }

    getProject() {
        return this.getDashboardDataService.getProject();
    }

    getSubProjects() {
        return this.getDashboardDataService.getSubProjects();
    }

    getOEList(): Observable<OEList> {
      return this.OEDataService.getOEList();
    }
}
