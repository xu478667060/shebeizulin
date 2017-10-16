import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lease',
  templateUrl: './lease.component.html',
  styleUrls: ['./lease.component.css']
})
export class LeaseComponent implements OnInit {

  selectList = [{
    list: ["所有订单状态", "启用", "停用"],
    isSelect: false
  }
  ];
  th: Array<any> = [
    {name: "订单编号", type: "small"},
    {name: "用户姓名", type: "small"},
    {name: "商家名称", type: "large"},
    {name: "设备名称", type: "small"},
    {name: "租期", type: "small"},
    {name: "下单时间", type: "large"},
    {name: "订单状态", type: "small"},
    {name: "操作", type: "flex"}
  ]

  searchTip = "请输入订单编号查询"

  dataList = [
    [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "杭州华彩店", type: "large"},
      {name: "发电机组01", type: "small"},
      {name: "1000", type: "small"},
      {name: "2017-05-02 14:45:45", type: "large"},
      {name: "租赁中", type: "small"},
    ],
  ]

  operationType = "lease"

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
  switchPage(pageNum) {
    console.log(pageNum)
  }


}
