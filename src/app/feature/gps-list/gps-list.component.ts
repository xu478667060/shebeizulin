import {Component, OnInit} from '@angular/core';
import {DeviceManageService} from "../../service/device-manage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gps-list',
  templateUrl: './gps-list.component.html',
  styleUrls: ['./gps-list.component.css']
})
export class GpsListComponent implements OnInit {

  pageLink = "/gps"

  searchTip = "请输入GPS编号或终端编号查询"

  th: Array<any> = [
    {name: "GPS编号", type: "big-large-more"},
    {name: "坐标", type: "big-large-more"},
    {name: "绑定终端", type: "big-large-more"}
  ]

  dataList = []

  hasOperation: boolean = false

  currentPage:number = 1

  totalPages:number

  // 搜索和筛选配置
  findOptions:any = {}

  constructor(private deviceService: DeviceManageService,
              private router:Router,
              private route:ActivatedRoute
              ) {
  }



  ngOnInit() {
    this.getQueryParam()
  }

  //1. 获取路由的查询参数
  getQueryParam(){
    this.route.params
      .subscribe(data=>{
          this.currentPage = Number(data.id)
          this.getList(this.currentPage,this.findOptions)
      })
  }

  //2. 获取列表
  getList(pageNo:number,obj?:any) {
    this.deviceService.getGpsList(pageNo,obj)
      .subscribe(data => {
        if (data.success) {
          let res = data.data.list
          let arr = []
          for (let i = 0; i < res.length; i++) {
            let a = []
            a.push({name: res[i].code, type: this.th[0].type})
            a.push({name: res[i].coordinate, type: this.th[1].type})
            a.push({name: res[i].ternimalCode, type: this.th[2].type})
            arr.push({showData:a,rowData:res[i]})
          }
          this.dataList = arr
          this.totalPages = data.data.totalPages==0?1:data.data.totalPages
        }
      })
  }

  //3. 搜索
  search(keyWord: string) {
    this.findOptions.code = keyWord

    // 当前页码为1 直接查询列表
    // 否则返回第一页，会自动带上搜索字段
    if(this.currentPage!==1){
      this.currentPage = 1
      this.router.navigate([this.pageLink,this.currentPage])
    }else{
      this.getList(this.currentPage,this.findOptions)
    }
  }

  //4. 分页
  switchPage(pageNum) {
    this.router.navigate([this.pageLink,pageNum])
  }

}
