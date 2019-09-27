import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { LinechartComponent } from '../linechart/linechart.component';
import { DoughnutchartComponent } from '../doughnutchart/doughnutchart.component';
import { DashboardCommonModule } from '../common/dashboard-common.module';
import { ChartsModule } from 'ng2-charts';
import { DashboardStaticContentComponent } from './dashboard-static-content/dashboard-static-content.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardContentComponent,
        DashboardProjectsComponent,
        LinechartComponent,
        DoughnutchartComponent,
        DashboardStaticContentComponent
    ],
    imports: [
        CommonModule,
        DashboardCommonModule,
        ChartsModule
    ],
    providers: [],
    exports: [DashboardComponent, DashboardStaticContentComponent]

})
export class DashboardModule { }
