import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit, OnChanges {
  @Input() price: number

  chart: number[] = []

  chartData: ChartDataset[] = [
    {
      label: '',
      data: this.chart,

      pointRadius: 0,
      borderColor: '#2D2F33',
      pointBackgroundColor: '#2D2F33',
      pointHoverBackgroundColor: '#2D2F33',
      borderWidth: 2,
      hoverBorderWidth: 0,
      pointBorderWidth: 0,
      tension: 0.3,
    }
  ];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    },

    plugins: {
      legend: {
        display: false
      },

      tooltip: {
        backgroundColor: '#FFF',
        displayColors: false,
        padding: 10,
        titleColor: '#2D2F33',
        titleFont: {
          size: 18
        },
        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };

  constructor() {

  }

  ngOnInit(): void {
    /*setInterval(() => {
      console.log(this.chart)
      console.log(this.price)
    }, 61000)*/
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.price !== undefined) {
      const date = new Date().toLocaleTimeString();
      this.chart.push(this.price);
      this.chartLabels.push(date);

      if (this.chart.length > 10) {
        this.chart.shift();
        this.chartLabels.shift();
      }
      this.chartData = [
        {
          label: '',
          data: this.chart
        }
      ];
    }
  }

}
