import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {UserManageService} from "../../service/user-manage.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pageLink = "/user"
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

  dataList = []

  operationType = "user"

  currentPage: number = 1
  totalPages: number

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
  changeOpen(type, bool) {
    this.selectList.forEach(item => {
      item.isSelect = false
    })
    this.selectList[type].isSelect = bool
  }

  //1. 获取路由的查询参数
  getQueryParam() {
    this.route.params
      .subscribe(data => {
        this.currentPage = Number(data.id)
        this.getList(this.currentPage, this.findOptions)
      })
  }

  // 2. 获取列表
  getList(pageNo: number, obj?: any) {
    this.userService.getUserList(pageNo, obj)
      .subscribe(data => {
        if (data.success) {
          let res = data.data.list
          let arr = []
          for (let i = 0; i < res.length; i++) {
            let a = []
            a.push({
              name: "<img class='big-img' src='../../../assets/image/weixiu-head.png'><span class='name'>" + res[i].name + "</span>",
              type: this.th[0].type
            })
            a.push({name: res[i].phone, type: this.th[1].type})
            if (res[i].authStatus === 1) {
              a.push({name: "<span class='stop'>未认证</span>", type: this.th[2].type})
            } else if (res[i].authStatus === 2) {
              a.push({name: "<span class='normal'>已认证</span>", type: this.th[2].type})
            }
            if (res[i].status === 1) {
              a.push({name: "<span class='normal'>正常</span>", type: this.th[3].type})
            } else if (res[i].status === 2) {
              a.push({name: "<span class='stop'>冻结</span>", type: this.th[3].type})
            }
            a.push({name: res[i].status !== 1, type: this.th[4].type, showSwitchButton: true})
            arr.push({showData: a, rowData: res[i], heightType: 'big-height'})
          }
          this.dataList = arr
          this.totalPages = data.data.totalPages==0?1:data.data.totalPages
        }
      })
  }

  // TODO:点击查询 筛选列表
  // 选择筛选条件
  selectItem(type, item) {
    console.log(type, item)
  }

  //搜索 筛选列表
  search(keyWord: string) {
    this.findOptions.name = keyWord
    if (this.currentPage !== 1) {
      this.currentPage = 1
      this.router.navigate([this.pageLink, this.currentPage])
    } else {
      this.getList(this.currentPage, this.findOptions)
    }
  }

  // 分页查询
  switchPage(pageNum) {
    this.router.navigate([this.pageLink, pageNum])
  }

  //跳转详情页
  toDetail(obj) {
    this.router.navigate(['user', obj.id, 'user-detail', 1])
  }

  changeUserState(obj) {
    let status:number
    obj.status===1?status=2:status=1
    this.userService.changeUserStatus(obj.id,status)
      .subscribe(data=>{
          if(data.success){
            if(data.data){
              this.getList(this.currentPage, this.findOptions)
            }
          }
      })
  }

  /*
  * 辅助
  * */

}
