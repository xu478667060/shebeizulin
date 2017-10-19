import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer.component.html',
  styleUrls: ['./maintainer.component.css']
})
export class MaintainerComponent implements OnInit {

  state = "left"

  switchItems = ["申请列表","维修员列表"]

  /*
   * 申请列表
   * */
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
    ]
  ]

  /*
  * 维修员列表
  * */
  searchTip1:string = "请输入维修员名称"

  th1: Array<any> = [
    {name: "姓名", type: "large"},
    {name: "维修员编号", type: "large"},
    {name: "联系方式", type: "large"},
    {name: "技术类型", type: "small"},
    {name: "维修类型", type: "small"},
    {name: "分数", type: "small"},
    {name: "账号状态", type: "small"},
    {name: "操作", type: "flex"},
  ]

  dataList1 = [
    [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ], [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ], [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ], [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ], [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ], [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ], [
      {
        name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>维修员</span>",
        type: "large",
        heightType: "big-height"
      },
      {name: "12121212", type: "large", heightType: "big-height"},
      {name: "1588787878", type: "large", heightType: "big-height"},
      {name: "发电机组", type: "small", heightType: "big-height"},
      {name: "维修、保养", type: "small", heightType: "big-height"},
      {name: "98", type: "small", heightType: "big-height"},
      {name: "<span class='normal'>正常</span>", type: "small", heightType: "big-height"},
    ],
  ]


  operationType = "maintainer"

  constructor(private router:Router) {
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

  toDetail(){
    this.router.navigate(["/maintainer/maintain-detail",1])
  }

  //TODO:切换左右列表
  switchItemsChange(item){
    this.state = item
  }

}
