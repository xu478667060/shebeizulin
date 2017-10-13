import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  selectList = [{
    list: ["所有状态", "启用", "停用"],
    isSelect: false
   }
  ]

  searchTip = "请输入账单账号查询"

  constructor() { }

  ngOnInit() {
  }

}
