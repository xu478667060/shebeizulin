import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonUtils} from "../../utils/common.utils";

@Component({
  moduleId: module.id,
  selector: 'down-select',
  templateUrl: 'down-select.component.html',
  styleUrls:["down-select.component.css"]
})

export class DownSelectComponent implements OnInit ,OnDestroy{

  // 选择项
  @Input() selectList:string[]

  // 是否下拉 默认隐藏
  @Input() isSelect:boolean = false

  // 取消打开下拉
  @Output() cancelOpen = new EventEmitter<boolean>()

  // 打开
  @Output() open = new EventEmitter<boolean>()

  // 向父组件弹出选中项
  @Output() selectItem = new EventEmitter<string>()

  _selectItem:string


  constructor() {
  }

  ngOnInit() {
    this.initState()
    this.listenGlobal()
  }

  initState(){
    this._selectItem = this.selectList[0]
  }

  openSelectBox(e){
    CommonUtils.stopBubble(e)
    this.isSelect = !this.isSelect
    this.open.emit(this.isSelect)
  }

  // 改变item
  changeItem(item){
    this._selectItem = item
    this.selectItem.emit(item)
  }


  // 监听全局点击事件取消打开下拉
  listenGlobal(){
    document.addEventListener("click",(ev)=>{
      this.cancelOpen.emit(false)
    })
  }

  ngOnDestroy(){
    document.addEventListener("click",(ev)=>{
    })
  }
}
