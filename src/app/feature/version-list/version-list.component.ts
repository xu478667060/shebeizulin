import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {

  searchTip= '请输入终端编号或归属'

  th: Array<any> = [
    {name: "名称", type: "big-large"},
    {name: "备注信息", type: "big-large"},
    {name: "上传时间", type: "big-large"},
    {name: "操作", type: "flex"}
  ]

  dataList = [
    [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ]
  ]

  operationType:string = "version"

  constructor() { }

  ngOnInit() {
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
