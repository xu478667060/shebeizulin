import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserManageService} from "../../service/user-manage.service";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  pageLink = "/merchant"

  state = "left"

  switchItems = ["申请列表", "商家列表"]

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
  currentPage: number = 1
  totalPages: number

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

  dataList1 = []

  currentPage1: number = 1
  totalPages1: number

  // 查询配置
  findOptions: any = {}

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserManageService) {
  }

  ngOnInit() {
    this.getQueryParam()
  }


  /*
  * 功能
  * */
  //1. 获取路由的查询参数
  getQueryParam() {
    this.route.params
      .subscribe(data => {
        this.route.queryParams
          .subscribe(param=>{
            this.state=param.loc||"left"
            console.log(this.state)
            if(this.state==="left"){

            }else{
              this.currentPage1 = Number(data.id)
              this.getList1(this.currentPage1, this.findOptions)
            }
          })
      })
  }

  //2. 获取商家列表
  getList1(pageNo: number, obj?: any) {
    if (this.state === "left") {

    } else {
      this.userService.getMerchantList(pageNo, obj)
        .subscribe(data => {
          if (data.success) {
            let res = data.data.list
            let arr = []
            for (let i = 0; i < res.length; i++) {
              let a = []
              a.push({name: res[i].code, type: this.th1[0].type})
              a.push({name: res[i].name, type: this.th1[1].type})
              a.push({name: res[i].ownerName, type: this.th1[2].type})
              a.push({name: res[i].phone, type: this.th1[3].type})
              if (res[i].status === 1) {
                a.push({name: "<span class='normal'>正常</span>", type: this.th1[4].type})
              } else if (res[i].status === 2) {
                a.push({name: "<span class='stop'>停用</span>", type: this.th1[4].type})
              } else if (res[i].status === 3) {
                a.push({name: "<span class='stop'>禁用</span>", type: this.th1[4].type})
              }
              // 构造五角星
              let html = ""
              let man = "<img class='star' src='../../../assets/image/man-star.png'/>"
              let empty = "<img class='star' src='../../../assets/image/empty-star.png'/>"
              for (let j = 0; j < res[i].lv; j++) {
                html += man.toString()
              }
              for (let j = 0; j < 3 - res[i].lv; j++) {
                html += empty.toString()
              }
              a.push({name: html, type: this.th1[5].type})

              arr.push({showData: a, rowData: res[i]})
            }
            this.dataList1 = arr
            this.totalPages1 = data.data.totalPages==0?1:data.data.totalPages
          }
        })
    }

  }

  //3. 搜索
  search(keyWord: string) {
    this.findOptions.code = keyWord

    // 当前页码为1 直接查询列表
    // 否则返回第一页，会自动带上搜索字段
    if(this.state==="left"){

    }else{
      if (this.currentPage1 !== 1) {
        this.currentPage1 = 1
        this.router.navigate([this.pageLink, this.currentPage1],{queryParams: {loc: this.state}})
      } else {
        this.getList1(this.currentPage1, this.findOptions)
      }
    }

  }

  //4. 分页
  switchPage(pageNum) {
    this.router.navigate([this.pageLink, pageNum],{queryParams: {loc: this.state}})
  }

  // 打开select框
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

  //切换左右列表
  switchItemsChange(item) {
    this.resetData()
    this.state = item
    this.router.navigate(["merchant", 1], {queryParams: {loc: item}})
  }

  //跳转详情页
  toDetail(obj) {
    if (this.state === 'left') {
      this.router.navigate(['merchant', obj.id, 'apply-for-merchant', 1])
    } else {
      this.router.navigate(["merchant", obj.id, "business-information", 'mc'])
    }
  }

  /*
  * 辅助
  * */

  // 重置关键数据
  resetData() {
    this.currentPage = 1
    this.currentPage1 = 1
  }

  // 获取当前的页码
  getCurrentPage() {
    return this.state === "left" ? this.currentPage : this.currentPage1;
  }


}
