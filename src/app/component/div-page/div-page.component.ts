import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'div-page',
  templateUrl: './div-page.component.html',
  styleUrls: ['./div-page.component.css']
})
export class DivPageComponent implements OnInit {

  // 弹出当前页
  @Output() getCurrentPage = new EventEmitter<number>()

  // 总页数 默认99
  @Input() total: number = 99

  // input框显示页码 默认为第1页
  pageNum: number = 1

  constructor(private _message: NzMessageService) {
  }

  ngOnInit() {
  }

  switchPage(type?: string) {
    switch (type) {
      case "pre":
        if (this.pageNum === 1) {
          break
        }
        this.getCurrentPage.emit(--this.pageNum)
        break
      case "next":
        if (this.pageNum === this.total) {
          break
        }
        this.getCurrentPage.emit(++this.pageNum)
        break
    }
  }

  checkInputPageNum() {
    if (this.pageNum > this.total || this.pageNum < 1) {
      this._message.error("页码不能超过总页数或小于1!")
      this.pageNum = 1
      this.getCurrentPage.emit(this.pageNum)
    }
  }

}
