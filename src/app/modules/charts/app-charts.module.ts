import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [LineChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [LineChartComponent, DoughnutChartComponent]
})
export class DashboardChartsModule { }
