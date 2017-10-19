import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzModalService, NzModalSubject} from "ng-zorro-antd";

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {

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

  dataList = [
    [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ], [
      {name: "v2.035.zip", type: "big-large"},
      {name: "增加新的设备类型:沙场设备", type: "big-large"},
      {name: "2017/09/05 09:26:23", type: "big-large"}
    ]
  ]

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

  constructor(private _modal: NzModalService) {
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

  delete(){
    this.cancelDelete()
    this.sureOption.open = true
    setTimeout(()=>{
      this.sureOption.open = false
    },2000)
  }

  upload(){
    this._uploadModal = this._modal.open({
      content:this.uploadModal,
      footer:false,
      width:"440px",
      closable : false,
      wrapClassName:"version-upload-modal-center",
    })
  }






}
