import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.css']
})
export class BusinessInformationComponent implements OnInit {
  current: number = 1;
  isSelect: boolean = false;
  lineChart1 = {
    type: 'line',
    id: 'chart1',
    title: '总租赁量（笔）',
    date: '2017'
  }
  lineChart2 = {
    type: 'line',
    id: 'chart2',
    title: '总交易量（笔）',
    date: '2017'
  }

  constructor() { }

  ngOnInit() {

  }
  changeSelect() {
    this.isSelect = !this.isSelect
  }
  changeTab(index) {
    this.current = index
  }
}
