import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { DashboardCommonModule } from '../../common/app-common.module';
import { DashboardChartsModule } from './charts/app-charts.module';
import { ContractModule } from './project-documents/contracts/contract.module';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardContentComponent,
        DashboardProjectsComponent
    ],
    imports: [
        CommonModule,
        DashboardCommonModule,
        DashboardChartsModule,
        ContractModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }
