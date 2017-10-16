import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  state = "left"

  switchItems = ["申请列表","商家列表"]

  operationType = "merchant"


  /*
  * 申请列表
  * */
  searchTip = "请输入店铺编号查询"
  th: Array<any> = [
    {name: "店铺名称", type: "large"},
    {name: "商家地址", type: "big-large"},
    {name: "店主姓名", type: "small"},
    {name: "联系方式", type: "large"},
    {name: "申请时间", type: "large"},
    {name: "操作", type: "flex"}
  ]

  dataList = [
    [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ], [
      {name: "华彩杭州西湖店", type: "large"},
      {name: "杭州西湖区华彩国际101号", type: "big-large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "large"},
      {name: "2017-10-11 10:45:25", type: "large"},
    ],
  ]

  /*
  * 商家列表
  * */

  searchTip1 = "请输入商家编号查询"

  selectList1 = [{
    list: ["所有账号状态", "正常", "冻结"],
    isSelect: false
  }
  ]

  th1: Array<any> = [
    {name: "商家编号", type: "large"},
    {name: "店铺名称", type: "large"},
    {name: "店主姓名", type: "small"},
    {name: "联系方式", type: "small"},
    {name: "账号状态", type: "small"},
    {name: "商家等级", type: "large"},
    {name: "操作", type: "flex"}
  ]

  dataList1 = [
    [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ], [
      {name: "1231313132", type: "large"},
      {name: "杭州西湖店", type: "large"},
      {name: "赵武", type: "small"},
      {name: "132454546446", type: "small"},
      {name: "正常", type: "small"},
      {name: "评分(待做)", type: "large"},
    ],
  ]



  constructor(private router:Router) {
  }

  ngOnInit() {
  }


  changeOpen(type, bool) {
    this.selectList1.forEach(item => {
      item.isSelect = false
    })
    this.selectList1[type].isSelect = bool
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

  //跳转详情页
  toDetail(){
    if(this.state==='left'){
      this.router.navigate(['merchant','apply-for-merchant',1])
    }else{
      this.router.navigate(["/merchant/business-information", 'mc'])
    }
  }

  //TODO:切换左右列表
  switchItemsChange(item){
    item==='left'?this.state=item:this.state=item
  }

}
