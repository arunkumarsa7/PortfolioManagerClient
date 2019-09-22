import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { LinechartComponent } from '../linechart/linechart.component';
import { DoughnutchartComponent } from '../doughnutchart/doughnutchart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardContentComponent,
        DashboardProjectsComponent,
        LinechartComponent,
        DoughnutchartComponent
    ],
    imports: [
        CommonModule,
        ChartsModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }