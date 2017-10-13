import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintain',
  templateUrl: './maintain.component.html',
  styleUrls: ['./maintain.component.css']
})
export class MaintainComponent implements OnInit {

  selectList = [{
    list: ["所有订单状态", "待接单", "已完成"],
    isSelect: false
  }
  ]

  searchTip = "请输入账单账号查询"

  th: Array<any> = [
    {name: "订单编号", type: "small"},
    {name: "用户姓名", type: "small"},
    {name: "维修员姓名", type: "small"},
    {name: "维修类型", type: "small"},
    {name: "技术类型", type: "small"},
    {name: "下单时间", type: "large"},
    {name: "订单状态", type: "small"},
    {name: "操作", type: "flex"}
  ]

  dataList = [
    [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "李四", type: "small"},
      {name: "维修", type: "small"},
      {name: "发电机", type: "small"},
      {name: "2017-01-02 16:45:44", type: "large"},
      {name: "待接单", type: "small"},
    ]
  ]

  operationType = "maintain"

  constructor() { }

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
