import { Component, OnInit } from '@angular/core';
// import { DatePicker } from 'ng-zorro-antd'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  // public barChart = {
  //   color: ['#3398DB'],
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
  //       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
  //     },
  //     formatter: "{b}月{a}:{c}"
  //   },
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     containLabel: true
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  //       axisTick: {
  //         alignWithLabel: true
  //       }
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: 'value'
  //     }
  //   ],
  //   series: [
  //     {
  //       name: '访问量',
  //       type: 'bar',
  //       barWidth: '60%',
  //       data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
  //     }
  //   ]
  // };

  public lineChart = {
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
        symbolSize: 16,
        itemStyle: {
          normal: {
            color: '#52cdf6',
          }
        },
        data: [1,2,3,4,5,6,7,89]
      }
    ]
  }

  public barChart = {
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

  ngOnInit() {
  }

}
