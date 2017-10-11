import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CommonUtils} from "../../utils/common.utils";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({height: "*"})),
      state('out', style({height: 40})),
      transition('* => in', animate('230ms linear')),
      transition('in => out', animate('230ms linear'))
    ])
  ]
})
export class IndexComponent implements OnInit, AfterViewInit {

  navSelectIndex = 0;
  isDown: boolean = false;
  navList: any = [
    {
      type: '设备管理', isSelect: true, imgUrl: '../../../assets/image/device.png',
      img_URL: '../../../assets/image/device-change.png',
      state: 'in',
      childList: [
        {name: '终端列表', isSelect: true, link: '/terminal', index: 0},
        {name: '版本列表', isSelect: false, link: '/version', index: 0},
        {name: 'GPS列表', isSelect: false, link: '/gps', index: 0},
        {name: '设备列表', isSelect: false, link: '/device', index: 0},
      ]
    },
    {
      type: '订单管理', isSelect: false, imgUrl: '../../../assets/image/order.png',
      img_URL: '../../../assets/image/order-change.png',
      state: 'in',
      childList: [
        {name: '监控订单', isSelect: false, link: '/monitoring', index: 1},
        {name: '租赁订单', isSelect: false, link: '/lease', index: 1},
        {name: '交易订单', isSelect: false, link: '/trade', index: 1},
        {name: '维保订单', isSelect: false, link: '/maintain', index: 1},
      ]
    },
    {
      type: '成员管理', isSelect: false, imgUrl: '../../../assets/image/user.png',
      img_URL: '../../../assets/image/user-change.png',
      state: 'in',
      childList: [
        {name: '商家管理', isSelect: false, link: '/merchant', index: 2},
        {name: '用户管理', isSelect: false, link: '/user', index: 2},
        {name: '维修员管理', isSelect: false, link: '/maintainer', index: 2},

      ]
    },
    {
      type: '数据报警', isSelect: false, imgUrl: '../../../assets/image/dataWarn.png',
      img_URL: '../../../assets/image/dataWarn-change.png',
      state: 'in',
      childList: [
        {name: '地图监控', isSelect: false, link: '/map', index: 3},
        {name: '实时警报', isSelect: false, link: '/realtime', index: 3},
        {name: '历史警报', isSelect: false, link: '/history', index: 3},
      ]
    },
    {
      type: '运营管理', isSelect: false, imgUrl: '../../../assets/image/operation.png',
      img_URL: '../../../assets/image/operation-change.png',
      state: 'in',
      childList: [
        {name: '统计报表', isSelect: false, link: '/statistics', index: 4},
        {name: '发票列表', isSelect: false, link: '/fapiao', index: 4},
        {name: '退货申请', isSelect: false, link: '/tuihuo', index: 4},
        {name: '监控费用', isSelect: false, link: '/expense', index: 4},
      ]
    },
  ];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {

    let $this = this;
    window.onresize = function () {
      $this.rightChange()
    }
  }

  ngAfterViewInit() {
    this.rightChange()
  }

  // main宽度适应
  rightChange() {
    let main = this.el.nativeElement.getElementsByClassName("main")[0]
    let width = document.body.clientWidth || document.documentElement.clientWidth
    let height = document.body.clientHeight || document.documentElement.clientHeight
    main.style.width = width - 240 + "px"
    main.style.height = height - 70 + "px"
  }

  switchRouter(child: any, e: any) {
    CommonUtils.stopBubble(e);
    this.navList[this.navSelectIndex].childList.forEach((children: any) => {
      children.isSelect = false
    });

    child.isSelect = true;
    this.navSelectIndex = child.index

  }

  /**菜单栏打开方法**/
  open(nav: any) {

    for (let i = 0; i < this.navList.length; i++) {

      if (nav.type == this.navList[i].type) {
        continue;
      }
      setTimeout(() => {
        this.navList[i].isSelect = false;
      }, 200);
      this.navList[i].state = 'out'
    }


    if (nav.isSelect) {
      setTimeout(() => {
        nav.isSelect = !nav.isSelect;
      }, 200);
      nav.state = 'out'
    } else {
      nav.isSelect = !nav.isSelect;
      nav.state = 'in'
    }

  }

  openTop() {

  }
}
