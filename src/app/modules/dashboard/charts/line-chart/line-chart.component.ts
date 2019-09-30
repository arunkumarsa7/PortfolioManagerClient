import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-linechartcomponent',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Kraft' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Leben' },
    { data: [18, 48, 77, 9, 100, 47, 80], label: 'CFS' },
    { data: [14, 53, 60, 90, 13, 66, 60], label: 'PMS' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // kraft
      backgroundColor: 'rgba(255, 110, 84, 0.1)',
      borderColor: '#ff6e54',
      pointBackgroundColor: '#ff6e54',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // leben
      backgroundColor: 'rgba(255, 166, 0, 0.1)',
      borderColor: '#ffa600',
      pointBackgroundColor: '#ffa600',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // cfs
      backgroundColor: 'rgba(221, 81, 130, 0.1)',
      borderColor: '#dd5182',
      pointBackgroundColor: '#dd5182',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }, { // pms
      backgroundColor: 'rgba(149, 81, 150, 0.1)',
      borderColor: '#955196',
      pointBackgroundColor: '#955196',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

}

