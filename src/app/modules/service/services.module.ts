import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from '../../shared/service/facade/facade.service';
import { DashboardService } from '../../shared/service/data/dashboard/dashboard.service';
import { ServiceOfferingService } from '../../shared/service/data/service-offering/service-offering.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        DashboardService,
        ServiceOfferingService,
        FacadeService
    ]
})
export class ServicesModule { }
