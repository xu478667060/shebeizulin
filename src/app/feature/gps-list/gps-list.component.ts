import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps-list',
  templateUrl: './gps-list.component.html',
  styleUrls: ['./gps-list.component.css']
})
export class GpsListComponent implements OnInit {

  searchTip = "请输入GPS编号"

  th: Array<any> = [
    {name: "GPS编号", type: "big-large-more"},
    {name: "坐标", type: "big-large-more"},
    {name: "绑定终端", type: "big-large-more"}
  ]

  dataList = [
    [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ], [
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ],[
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ],[
      {name: "46546465465", type: "big-large-more"},
      {name: "116.527301,39.94083", type: "big-large-more"},
      {name: "46546465454645", type: "big-large-more"},
    ],
  ]

  hasOperation:boolean = false

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
