import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-anio',
  templateUrl: './anio.component.html',
  styleUrls: ['./anio.component.css']
})
export class AnioComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

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
    labels: [ '2021' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Enero' },
      { data: [ 78, 48, 40, 19, 86, 27, 90 ], label: 'Febrero' },
      { data: [ 50, 48, 40, 19, 86, 27, 90 ], label: 'Marzo' },
      { data: [ 48, 48, 40, 19, 86, 27, 90 ], label: 'Abril' },
      { data: [ 68, 48, 40, 19, 86, 27, 90 ], label: 'Mayo' },
      { data: [ 58, 48, 40, 19, 86, 27, 90 ], label: 'Junio' },
      { data: [ 88, 48, 40, 19, 86, 27, 90 ], label: 'Julio' },
      { data: [ 98, 48, 40, 19, 86, 27, 90 ], label: 'Agosto' },
      { data: [ 58, 48, 40, 19, 86, 27, 90 ], label: 'Septiembre' },
      { data: [ 48, 48, 40, 19, 86, 27, 90 ], label: 'Octubre' },
      { data: [ 68, 48, 40, 19, 86, 27, 90 ], label: 'Noviembre' },
      { data: [ 98, 48, 40, 19, 86, 27, 90 ], label: 'Diciembre' },
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

  constructor() { }

  ngOnInit(): void {
  }


}
