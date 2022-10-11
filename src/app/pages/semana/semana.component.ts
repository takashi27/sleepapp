import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css']
})
export class SemanaComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }     
    }
  };
  public barChartType: ChartType = 'bar';  

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Semana 3 del mes Mayo de 2022' ],
    datasets: [
      { data: [ 95, 59, 80, 81, 56, 55, 40 ], label: 'Lunes' },
      { data: [ 78, 48, 40, 19, 86, 27, 90 ], label: 'Martes' },
      { data: [ 70, 48, 40, 19, 86, 27, 90 ], label: 'Miercoles' },
      { data: [ 0, 48, 40, 19, 86, 27, 90 ], label: 'Jueves' },      
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
