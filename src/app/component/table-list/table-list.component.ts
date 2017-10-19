import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'table-list',
  templateUrl: 'table-list.component.html',
  styleUrls:["table-list.component.css"]
})

export class TableListComponent implements OnInit,OnChanges {

  @Input() th:Array<any>

  @Input() dataList:Array<any>

  @Input() operationType:string

  // 是否有操作一列 默认为true
  @Input() hasOperation:boolean = true

  @Output() lookDetail = new EventEmitter()

  @Output() delete = new EventEmitter()

  @Output() restart = new EventEmitter()

  @Output() edit = new EventEmitter()

  @Output() changeState = new EventEmitter()

  _dataList:Array<any> = []
  constructor() {
  }

  ngOnInit() {

  }
  ngOnChanges(changes:SimpleChanges){
    this._dataList = this.dataList
  }

  _lookDetail(obj){
    this.lookDetail.emit(obj)
  }

  _delete(){
     this.delete.emit()
  }

  _restart(){
    this.restart.emit()
  }
  _edit(){
    this.edit.emit()
  }
  _changeState(val){
    this.changeState.emit(val)
  }
}
