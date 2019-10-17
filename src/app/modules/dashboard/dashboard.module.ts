import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ContractModule } from './project-documents/contracts/contract.module';
import { ProjectsModule } from './projects/projects.module';
import { DashboardHeaderModule } from './dashboard-header/dashboard-header.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ServiceRecordModule } from './service-record/service-record.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        ContractModule,
        ProjectsModule,
        DashboardHeaderModule,
        ServiceRecordModule,
        DashboardRoutingModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }
