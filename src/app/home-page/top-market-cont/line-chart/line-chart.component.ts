import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartDataset, ChartOptions} from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit, OnChanges {
  @Input() price: number

  chartData: ChartDataset[] = [
    {
      label: '',
      data: [],

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
    let date = new Date().getMinutes()
    this.chartData[0].data.push(this.price)
    this.chartLabels.push(date.toLocaleString())
    }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.price) {
      let date = new Date().getMinutes()
      this.chartData[0].data.push(this.price)
      this.chartLabels.push(date.toLocaleString())
      if (this.chartData[0].data.length >= 10 && this.chartLabels.length >= 10) {
        this.chartData[0].data.shift()
        this.chartLabels.shift()
      }
      console.log(this.chartData[0].data)
    }
  }

}
