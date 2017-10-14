import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectList = [{
    list: ["所有认证状态", "待审核", "已审核"],
    isSelect: false
  },
    {
      list: ["所有账号状态", "正常", "冻结"],
      isSelect: false
    }
  ]

  searchTip = "请输入用户名称"

  th: Array<any> = [
    {name: "用户", type: "big-large"},
    {name: "手机号", type: "large"},
    {name: "认证状态", type: "small"},
    {name: "账号状态", type: "small"},
    {name: "账号冻结", type: "large"},
    {name: "操作", type: "flex"}
  ]

  dataList = [
    [
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],[
      {name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>林秀儿</span>", type: "big-large",heightType:"big-height"},
      {name: "154645464654", type: "large",heightType:"big-height"},
      {name: "待审核", type: "small",heightType:"big-height"},
      {name: "正常", type: "small",heightType:"big-height"},
      {name:"",type: "large",heightType:"big-height",showSwitchButton:true},
    ],
    ]

  operationType = "user"

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
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
