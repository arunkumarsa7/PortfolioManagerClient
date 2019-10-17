import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { DashboardService } from 'src/app/shared/service/data/dashboard/dashboard.service';
import { ServiceOfferingService } from 'src/app/shared/service/data/service-offering/service-offering.service';
import { PortfolioService } from 'src/app/shared/service/data/portfolio/portfolio.service';
import { OEDataService } from 'src/app/shared/service/data/oe/oe-data.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        DashboardService,
        ServiceOfferingService,
        PortfolioService,
        OEDataService,
        FacadeService
    ]
})
export class ServicesModule { }
