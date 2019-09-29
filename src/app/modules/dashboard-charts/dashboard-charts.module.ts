import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinechartComponent } from './linechart/linechart.component';
import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [LinechartComponent, DoughnutchartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [LinechartComponent, DoughnutchartComponent]
})
export class DashboardChartsModule { }
