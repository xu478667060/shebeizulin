import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer.component.html',
  styleUrls: ['./maintainer.component.css']
})
export class MaintainerComponent implements OnInit {


  searchTip = "请输入维修员名称"

  th: Array<any> = [
    {name: "姓名", type: "large"},
    {name: "联系方式", type: "small"},
    {name: "技术类型", type: "small"},
    {name: "可服务品牌", type: "large"},
    {name: "维修类型", type: "small"},
    {name: "申请时间", type: "large"},
    {name: "操作", type: "flex"},
  ]

  dataList = [
    [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],[
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "1588787878", type: "small", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "<div class='space-wrap'>松下,松下，松下，松下，松下</div>", type: "large", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "2017-08-08 08:08:08", type: "large", heightType: "big-height"},
    ],
  ]

  operationType = "mainainer"

  constructor() {
  }

  ngOnInit() {
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
