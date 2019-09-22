import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';
import { LinechartcomponentComponent } from '../linechartcomponent/linechartcomponent.component';
import { DoughnutchartcomponentComponent } from '../doughnutchartcomponent/doughnutchartcomponent.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardContentComponent,
        DashboardProjectsComponent,
        LinechartcomponentComponent,
        DoughnutchartcomponentComponent
    ],
    imports: [
        CommonModule,
        ChartsModule
    ],
    providers: [],
    exports: [DashboardComponent]

})
export class DashboardModule { }