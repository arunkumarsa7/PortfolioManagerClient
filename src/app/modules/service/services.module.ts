import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from 'src/app/shared/service/facade/facade.service';
import { DashboardService } from 'src/app/shared/service/data/dashboard/dashboard.service';
import { ServiceOfferingService } from 'src/app/shared/service/data/service-offering/service-offering.service';
import { PortfolioService } from 'src/app/shared/service/data/portfolio/portfolio.service';
import { OEDataService } from 'src/app/shared/service/data/oe/oe-data.service';
import { LoggingService } from 'src/app/shared/service/logging/logging.service';
import { ErrorService } from 'src/app/shared/service/error/error.service';
import { LoginService } from 'src/app/shared/service/login/login.service';
import { SnackBarService } from 'src/app/common/snackbar/snack-bar.service';

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
        LoggingService,
        ErrorService,
        LoginService,
        SnackBarService,
        FacadeService
    ]
})
export class ServicesModule { }
