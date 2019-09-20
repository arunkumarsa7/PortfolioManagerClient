import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnutchartcomponent',
  templateUrl: './doughnutchartcomponent.component.html',
  styleUrls: ['./doughnutchartcomponent.component.css']
})
export class DoughnutchartcomponentComponent  {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }
}

