import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css'],
})
export class RealtimeComponent implements OnInit {

  state = "left"

  switchItems = ["数据报警","状态报警"]



  searchTip = "请输入设备编号查询"

  /*
  * 数据报警*/
  selectList = [{
    list: ["所有设备类型", "发电机", "发电机"],
    isSelect: false
  },
    {
      list: ["所有属性", "市电UAD", "市电UAD"],
      isSelect: false
    }
  ]
  th: Array<any> = [
    {name: "设备编号", type: "large"},
    {name: "设备类型", type: "small"},
    {name: "设备名称", type: "small"},
    {name: "属性", type: "small"},
    {name: "当前值", type: "small"},
    {name: "最大值", type: "small"},
    {name: "最小值", type: "small"},
    {name: "时间", type: "large"}
  ]


  dataList = [
    [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "small"},
      {name: "市电UAD", type: "small"},
      {name: "300.00A", type: "small"},
      {name: "200.00A", type: "small"},
      {name: "0.00A", type: "small"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ],
  ]

  /*
  * 状态报警
  * */
  selectList1 = [{
    list: ["所有设备类型", "发电机", "发电机"],
    isSelect: false
  },
    {
      list: ["所有属性", "市电UAD", "市电UAD"],
      isSelect: false
    }
  ]

  th1: Array<any> = [
    {name: "设备编号", type: "large"},
    {name: "设备类型", type: "small"},
    {name: "设备名称", type: "large"},
    {name: "属性", type: "large"},
    {name: "警报类型", type: "large"},
    {name: "时间", type: "large"}
  ]

  dataList1 = [
    [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ],[
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ],[
      {name: "1231313132", type: "large"},
      {name: "发电机", type: "small"},
      {name: "发电机机组01", type: "large"},
      {name: "公共报警", type: "large"},
      {name: "故障停机", type: "large"},
      {name: "2017-09-17 11:15:50", type: "large"},
    ],
    ]

  hasOperation:boolean = false

  constructor() { }

  ngOnInit() {
  }

  changeOpen(type, bool) {
    if(this.state==='left'){
      this.selectList.forEach(item => {
        item.isSelect = false
      })
      this.selectList[type].isSelect = bool
    }else{
      this.selectList1.forEach(item => {
        item.isSelect = false
      })
      this.selectList1[type].isSelect = bool
    }

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

  //TODO:切换左右列表
  switchItemsChange(item){
    console.log(item)
    item==='left'?this.state=item:this.state=item
  }

}
