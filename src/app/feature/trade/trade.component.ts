import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  selectList = [{
    list: ["所有订单状态", "代发货", "已发货"],
    isSelect: false
  }
  ]

  searchTip = "请输入账单账号查询"

  th: Array<any> = [
    {name: "订单编号", type: "small"},
    {name: "用户姓名", type: "small"},
    {name: "商家名称", type: "large"},
    {name: "设备名称", type: "large"},
    {name: "总价", type: "small"},
    {name: "下单时间", type: "large"},
    {name: "状态", type: "small"},
    {name: "操作", type: "flex"}
  ]

  dataList = [
    [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "设备机组01", type: "large"},
      {name: "￥1000", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待发货", type: "small"},
    ],
  ]

  operationType = "trade"

  constructor() {
  }

  ngOnInit() {
  }

  changeOpen(type, bool) {
    this.selectList.forEach(item => {
      item.isSelect = false
    })
    this.selectList[type].isSelect = bool
  }

  // TODO:点击查询 筛选列表
  // 选择筛选条件
  selectItem(type, item) {
    console.log(type, item)
  }

  // TODO:搜索 筛选列表
  search(keyWord: string) {
    console.log(keyWord)
  }

  // TODO:分页查询
  switchPage(pageNum){
    console.log(pageNum)
  }

}
