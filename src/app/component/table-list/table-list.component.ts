import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'table-list',
  templateUrl: 'table-list.component.html',
  styleUrls:["table-list.component.css"]
})

export class TableListComponent implements OnInit {

  @Input() th:Array<any>

  @Input() dataList:Array<any>

  @Input() operationType:string

  // 是否有操作一列 默认为true
  @Input() hasOperation:boolean = true

  @Output() lookDetail = new EventEmitter()

  @Output() delete = new EventEmitter()

  @Output() restart = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }

  _lookDetail(){
    this.lookDetail.emit()
  }

  _delete(){
     this.delete.emit()
  }

  _restart(){
    this.restart.emit()
  }
}
