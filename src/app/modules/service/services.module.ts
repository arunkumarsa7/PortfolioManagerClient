import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacadeService } from '../../shared/service/facade/facade.service';
import { DashboardDataService } from '../../shared/service/data/dashboard-data.service';
import { OEDataService } from 'src/app/shared/service/data/oe-data.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        DashboardDataService,
        OEDataService,
        FacadeService
    ]
})
export class ServicesModule { }
