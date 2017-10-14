import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { DatePicker } from 'ng-zorro-antd'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent implements OnInit {

  lineChart1 = {
    type: 'line',
    id: 'chart1',
    title: '总销售额（万元）',
    date: '2017'
  }
  lineChart2 = {
    type: 'line',
    id: 'chart2',
    title: '订单数量（单）',
    date: '2017'
  }
  barChart1 = {
    type: 'bar',
    id: 'chart3',
    title: '消费者数量（个）',
    date: '2017'
  }
  barChart2 = {
    type: 'bar',
    id: 'chart4',
    title: '维修员数量（个）',
    date: '2017'
  }

  constructor() { }

  ngOnInit() {
  }

}
