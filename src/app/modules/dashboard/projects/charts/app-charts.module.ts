import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [LineChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [LineChartComponent, DoughnutChartComponent]
})
export class AppChartsModule { }
