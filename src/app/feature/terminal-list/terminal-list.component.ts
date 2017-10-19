import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzModalService, NzModalSubject} from "ng-zorro-antd";
import {ActivatedRoute, Router} from "@angular/router";
import {DeviceManageService} from "../../service/device-manage.service";

/**
 * Author : 李文超
 * Email : 1159849884@qq.com
 * Time : 2017/10/13 8:14
 * Description : 终端列表
 **/
@Component({
  selector: 'app-terminal-list',
  templateUrl: './terminal-list.component.html',
  styleUrls: ['./terminal-list.component.css']
})
export class TerminalListComponent implements OnInit {

  pageLink:string = "/terminal"

  @ViewChild("editModal")
  editModal:ElementRef

  _editModal:NzModalSubject

  selectList = [{
    list: ["所有状态", "启用", "停用"],
    isSelect: false
  },
    {
      list: ["所有通讯状态", "在线", "离线"],
      isSelect: false
    }
  ]

  searchTip = "请输入终端编号或归属"

  th: Array<any> = [
    {name: "终端编号", type: "small"},
    {name: "控制器信息", type: "large"},
    {name: "状态", type: "small"},
    {name: "通讯状态", type: "small"},
    {name: "归属", type: "large"},
    {name: "剩余时间(天)", type: "small"},
    {name: "备注", type: "large"},
    {name: "操作", type: "flex"}
  ]

  dataList = []



  operationType = "terminal"

  currentPage: number = 1
  totalPages: number

  findOptions: any = {}

  /*
  * 操作提示
  * */
  sureOption = {
    open:false,
    type: 1,                        // 0
    title: "重启成功",              // 重启失败
    tips: "终端会在60秒内重新启动"   // 失败  请检查终端是否在线
  }


  _date1;
  _date2;


  constructor(private _modal:NzModalService,
              private route:ActivatedRoute,
              private router:Router,
              private deviceService:DeviceManageService
              ) {

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
    this.deviceService.getTerminalList(pageNo, obj)
      .subscribe(data => {
        if (data.success) {
          let res = data.data.list
          let arr = []
          for (let i = 0; i < res.length; i++) {
            let a = []
            a.push({name: res[i].code, type: this.th[0].type})
            a.push({name: res[i].controller, type: this.th[1].type})
            if (res[i].status === 1) {
              a.push({name: "<span class='normal'>启用</span>", type: this.th[2].type})
            } else if (res[i].status === 2) {
              a.push({name: "<span class='stop'>停用</span>", type: this.th[2].type})
            }
            if (res[i].online === 1) {
              a.push({name: "<span class='normal'>在线</span>", type: this.th[3].type})
            } else if (res[i].authStatus === 2) {
              a.push({name: "<span class='stop'>离线</span>", type: this.th[3].type})
            }
            a.push({name: res[0].belongName, type: this.th[4].type})
            a.push({name: res[0].days, type: this.th[5].type})
            a.push({name: res[0].mark, type: this.th[6].type})
            arr.push({showData: a, rowData: res[i], heightType: 'big-height'})
          }
          this.dataList = arr
          this.totalPages = data.data.totalPages==0?1:data.data.totalPages
        }
      })
  }

  // 选择筛选条件
  selectItem(type, item) {
    if(type===0){
      if(item==="启用"){
        this.findOptions.status=1
      }else if(item==="停用"){
        this.findOptions.status=2
      }else{
        delete this.findOptions.status
      }
    }else {
      if(item==="在线"){
        this.findOptions.online=1
      }else if(item==="离线"){
        this.findOptions.online=2
      }else{
        delete this.findOptions.online
      }
    }
    this.reLoad()
  }

  // 搜索
  search(keyWord: string) {
    this.findOptions.code = keyWord
    this.reLoad()
    delete this.findOptions.code
  }

  // 分页查询
  switchPage(pageNum){
    this.router.navigate([this.pageLink, pageNum])

  }

  restart(){
    this.sureOption.open = true
    setTimeout(()=>{
      this.sureOption.open = false
    },2000)
  }

  // 关闭模态窗
  cancelDelete(){
    this._editModal.destroy()
  }

  // 编辑框打开
  edit(){
    this._editModal = this._modal.open({
      content:this.editModal,
      footer:false,
      width:"440px",
      closable : false,
      wrapClassName:"terminal-edit-modal-center",
    })
  }

  /*
  * 辅助
  * */
  reLoad(){
    if (this.currentPage !== 1) {
      this.currentPage = 1
      this.router.navigate([this.pageLink, this.currentPage])
    } else {
      this.getList(this.currentPage, this.findOptions)
    }
  }

}
