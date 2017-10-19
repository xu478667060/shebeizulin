import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {


  selectList = [{
    list: ["所有状态", "启用", "停用"],
    isSelect: false
  },
    {
      list: ["所有通讯状态", "在线", "离线"],
      isSelect: false
    },{
      list: ["所有设备类型", "发电机", "发电机"],
      isSelect: false
    }
  ]
  th: Array<any> = [
    {name: "设备图片", type: "small"},
    {name: "设备类型", type: "small"},
    {name: "设备编号", type: "large"},
    {name: "设备归属", type: "large"},
    {name: "归属类型", type: "small"},
    {name: "状态", type: "small"},
    {name: "通讯状态", type: "small"},
    {name: "剩余时间(天)", type: "small"},
    {name: "操作", type: "flex"},
  ]

  searchTip:string = "请输入终端编号或归属"

  dataList = [
    [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],  [
      {name: "<img class='big-img' src='../../../assets/image/example.png' alt='图片' />", type: "small",heightType:"big-height"},
      {name: "发电机", type: "small",heightType:"big-height"},
      {name: "454646545465645", type: "large",heightType:"big-height"},
      {name: "浙江杭州市西湖区华彩国际店", type: "large",heightType:"big-height"},
      {name: "交易", type: "small",heightType:"big-height"},
      {name: "启用", type: "small",heightType:"big-height"},
      {name: "在线", type: "small",heightType:"big-height"},
      {name: "100", type: "small",heightType:"big-height"},
    ],
  ]

  operationType = "device"

  constructor(private router:Router) { }

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

  toDetail(){
    this.router.navigate(['device','list-device-detail',1])
  }
}
