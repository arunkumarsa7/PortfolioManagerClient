import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { DashboardService } from 'src/app/shared/service/data/dashboard/dashboard.service';
import { ServiceOfferingService } from 'src/app/shared/service/data/service-offering/service-offering.service';
import { OEDataService } from 'src/app/shared/service/data/oe/oe-data.service';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';
import { LoggingService } from 'src/app/shared/service/logging/logging.service';
import { ErrorService } from 'src/app/shared/service/error/error.service';

@NgModule({
    imports: [
    CommonModule
    ],
    declarations: [],
    providers: [
        DashboardService,
        ServiceOfferingService,
        OEDataService,
        NotificationService,
        LoggingService,
        ErrorService,
        FacadeService
    ]
})
export class ServicesModule { }
