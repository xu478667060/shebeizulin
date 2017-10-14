import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer.component.html',
  styleUrls: ['./maintainer.component.css']
})
export class MaintainerComponent implements OnInit {


  searchTip = "请输入维修员名称"

  th: Array<any> = [
    {name: "姓名", type: "big-large"},
    {name: "联系方式", type: "large"},
    {name: "技术类型", type: "small"},
    {name: "可服务品牌", type: "big-large"},
    {name: "维修类型", type: "small"},
    {name: "申请时间", type: "large"},
    {name: "操作", type: "flex"},
  ]

  dataList = [
    [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],
  ]

  operationType = "terminal"

  constructor() { }

  ngOnInit() {
  }

}
