import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexDataLabels, ApexTooltip, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend
  dataLabels: ApexDataLabels
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series:
        [20, 20, 20, 15, 15, 10],

      chart: {
        width: 490,
        type: "pie",
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        style: {
          fontSize: '12px',
          fontFamily: 'Ubuntu'
        },
        marker: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          fontFamily: 'Ubuntu',
        },
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: 'Ubuntu',
        markers: {
          fillColors: ['#775DD0', '#008FFB', '#4CAF50', '#FA4443', '#F9CE1D', '#FF9800',],
        },
      },
      fill: {
        colors: ['#775DD0', '#008FFB', '#4CAF50', '#FA4443', '#F9CE1D', '#FF9800',]
      },
      labels: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java"],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              width: 415
            },
            legend: {
              position: "bottom",
            }
          }
        }
      ]
    };
  }

}
