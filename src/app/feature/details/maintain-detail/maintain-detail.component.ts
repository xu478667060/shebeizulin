import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maintain-detail',
  templateUrl: './maintain-detail.component.html',
  styleUrls: ['./maintain-detail.component.css']
})
export class MaintainDetailComponent implements OnInit {

  maintainState: any = {
    name: '维修状况',
    isChange: true
  };
  infoSet: any = {
    name: '信息设置',
    isChange: false
  };
  selectList = [{
    list: [ "启用", "停用" , "禁止"],
    isSelect: false
  }
  ];

  /**
    * Author : 李文超
    * Email : 1159849884@qq.com
    * Time : 2017/10/16 10:57
    * Description : 列表添加
    **/
  selectList1 = [{
    list: ["所有评价等级", "好评", "中评"],
    isSelect: false
  }
  ]
  searchTip = "请输入订单编号查询"

  th: Array<any> = [
    {name: "订单编号", type: "small"},
    {name: "用户姓名", type: "small"},
    {name: "维修类型", type: "small"},
    {name: "评价等级", type: "small"},
    {name: "用户评论", type: "big-large-more"},
    {name: "下单时间", type: "large"},
  ]

  dataList = [
    [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "张三", type: "small"},
      {name: "维修", type: "small"},
      {name: "好评", type: "small"},
      {name: "对方答复的范德萨发生大发大发大发发生发的萨芬", type: "big-large-more"},
      {name: "发电机组01", type: "large"},
    ],
   ]

  hasOperation:boolean = false


    constructor() {
  }

  ngOnInit() {
  }


  //头部选择事件
  switch(evs :any) {
    this.maintainState.isChange = false ;
    this.infoSet.isChange = false ;
    evs.isChange = true
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
