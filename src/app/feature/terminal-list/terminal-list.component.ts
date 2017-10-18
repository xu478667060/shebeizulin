import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzModalService, NzModalSubject} from "ng-zorro-antd";

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

  dataList = [
    [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ], [
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],[
      {name: "1231313132", type: "small"},
      {name: "454646545465645", type: "large"},
      {name: "启动", type: "small"},
      {name: "在线", type: "small"},
      {name: "杭州西湖区华彩国际店", type: "large"},
      {name: "1000", type: "small"},
      {name: "发电机组01", type: "large"},
    ],
  ]

  operationType = "terminal"


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


  constructor(private _modal:NzModalService) {

  }

  ngOnInit() {
  }

  changeOpen(type, bool) {
    this.selectList.forEach(item => {
      item.isSelect = false
    })
    this.selectList[type].isSelect = bool
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

  restart(){
    this.sureOption.open = true
    setTimeout(()=>{
      this.sureOption.open = false
    },2000)
  }

  cancelDelete(){
    this._editModal.destroy()
  }

  edit(){
    this._editModal = this._modal.open({
      content:this.editModal,
      footer:false,
      width:"440px",
      closable : false,
      wrapClassName:"terminal-edit-modal-center",
    })
  }

}
