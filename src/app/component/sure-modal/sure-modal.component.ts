import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sure-modal',
  templateUrl: './sure-modal.component.html',
  styleUrls: ['./sure-modal.component.css']
})
export class SureModalComponent implements OnInit {

  /*
     types  类型 1成功 2失败
     title  操作文字提示
     tips:  提示信息
  * */
  @Input() options: any = {
    open:false,
    type: 1,
    title: "",
    tips: ""
  }

  constructor() {
  }

  ngOnInit(

  ) {
  }

}
