import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardCommonModule } from '../../common/app-common.module';
import { ContractModule } from './project-documents/contracts/contract.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardCommonModule,
        ContractModule,
        ProjectsModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }
