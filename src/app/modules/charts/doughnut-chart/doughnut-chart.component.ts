import { Component } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnutchartcomponent',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {
  public doughnutChartLabels: string[] = ['Kraft', 'Leben', 'CFS', 'PMS'];
  public doughnutChartData: number[] = [350, 450, 100, 255];
  public doughnutChartType: ChartType = 'doughnut';
  public donutColors = [
    {
      backgroundColor: [
        '#ff6e54',
        '#ffa600',
        '#dd5182',
        '#955196'
      ]
    }];
  constructor() { }

}

