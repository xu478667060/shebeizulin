import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as echarts from 'echarts'

@Component({
  selector: 'mc-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chart;
  @Output() changesDate = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.chart.type === 'line') {
      this.setLineChart()
    }

    if (this.chart.type === 'bar') {
      this.setBarChart()
    }

  }

  setLineChart() {
    console.log(this.chart.id)
    var myChart = echarts.init(document.getElementById(this.chart.id));
    var lineChart = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: '40px',
        left: '24px',
        right: '24px',
        bottom: '7px',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            lineStyle: {
              color: '#e0e0e0',
            }
          },

          axisTick: {
            show: false,
            alignWithLabel: true
          },
          axisLabel: {
            margin: 12,
            color: '#999',
            fontSize: 14,

          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            fontSize: 14,
            color: '#999'
          },
          splitLine: {
            lineStyle: {
              color: '#e0e0e0'
            }
          }
        },
      ],
      series: [
        {
          type: 'line',
          smooth: true,
          symbolSize: 8,
          showSymbol: false,
          itemStyle: {
            normal: {
              color: '#00b64f',
              borderWidth: 3,
            }
          },
          lineStyle : {
            normal: {
              width: 3,
            }
          },
          data: [10,21,31,14,15,16,27,49]
        }
      ]
    }
    myChart.setOption(lineChart);
  }

  setBarChart () {
    var myChart = echarts.init(document.getElementById(this.chart.id));
    var barChart = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        top: '40px',
        left: '24px',
        right: '24px',
        bottom: '7px',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLine: {
            lineStyle: {
              color: '#e0e0e0',
            }
          },

          axisTick: {
            show: false,
            alignWithLabel: true
          },
          axisLabel: {
            margin: 12,
            color: '#999',
            fontSize: 14,

          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            fontSize: 14,
            color: '#999'
          },
          splitLine: {
            lineStyle: {
              color: '#e0e0e0'
            }
          }
        },
      ],
      series: [
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#00b64f',
            }
          },
          barWidth: 20,
          data: [1, 2, 3, 4, 5, 6, 7, 89, 3, 6 ,5]
        }
      ]
    }
    myChart.setOption(barChart);
  }

  getChartData(data) {
    console.log(data)
    this.changesDate.emit(data)
  }
}
