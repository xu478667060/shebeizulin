import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzModalService, NzModalSubject} from "ng-zorro-antd";
import {ActivatedRoute, Router} from "@angular/router";
import {DeviceManageService} from "../../service/device-manage.service";
import * as moment from "moment"
@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {

  pageLink = "/version"

  @ViewChild("deleteSureModal")
  deleteSureModal: ElementRef

  _deleteSureModal:NzModalSubject


  @ViewChild("uploadModal")
  uploadModal: ElementRef

  _uploadModal:NzModalSubject

  searchTip = '请输入终端编号或归属'

  th: Array<any> = [
    {name: "名称", type: "big-large"},
    {name: "备注信息", type: "big-large"},
    {name: "上传时间", type: "big-large"},
    {name: "操作", type: "flex"}
  ]

  dataList = []

  currentPage:number = 1
  totalPages:number
  findOptions:any = {}

  operationType: string = "version"

  /*
  * 确认配置
  * */
  sureOption:any = {
    open:false,
    type:0,
    title:"删除失败",
    tips:""
  }

  constructor(private _modal: NzModalService,
              private route:ActivatedRoute,
              private router:Router,
              private deviceService:DeviceManageService
              ) {
  }

  ngOnInit() {
      this.getQueryParam()
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
    this.deviceService.getVersionList(pageNo, obj)
      .subscribe(data => {
        if (data.success) {
          let res = data.data.list
          let arr = []
          for (let i = 0; i < res.length; i++) {
            let a = []
            a.push({name: res[i].name, type: this.th[0].type})
            a.push({name: res[i].mark, type: this.th[1].type})
            a.push({name: moment(res[i].time).format("YYYY/MM/DD HH:mm:ss"), type: this.th[2].type})
            arr.push({showData: a, rowData: res[i]})
          }
          this.dataList = arr
          this.totalPages = data.data.totalPages==0?1:data.data.totalPages
        }
      })
  }

  // 筛选列表
  search(keyWord: string) {
    this.findOptions.name = keyWord
    this.reLoad()
    delete this.findOptions.name
  }

  // 分页查询
  switchPage(pageNum) {
    this.router.navigate([this.pageLink, pageNum])
  }

  // TODO:删除确认
  deleteSure() {
     this._deleteSureModal = this._modal.open({
      content:this.deleteSureModal,
      width:"320px",
      wrapClassName:"version-delete-modal-center",
      footer:false,
    })
  }
  // 取消删除
  cancelDelete(){
    if (this._deleteSureModal){
      this._deleteSureModal.destroy()
    }
    if(this._uploadModal){
      this._uploadModal.destroy()
    }
  }

  // 删除
  delete(){
    this.cancelDelete()
    this.sureOption.open = true
    setTimeout(()=>{
      this.sureOption.open = false
    },2000)
  }

  // 打开上传pump 弹窗
  upload(){
    this._uploadModal = this._modal.open({
      content:this.uploadModal,
      footer:false,
      width:"440px",
      closable : false,
      wrapClassName:"version-upload-modal-center",
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
