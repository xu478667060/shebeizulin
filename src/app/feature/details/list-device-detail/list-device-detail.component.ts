import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-device-detail',
  templateUrl: './list-device-detail.component.html',
  styleUrls: ['./list-device-detail.component.css']
})
export class ListDeviceDetailComponent implements OnInit {

  deviceDetail: any = {
    name: '设备详情',
    isChange: true
  };
  realTimeData: any = {
    name: '实时数据',
    isChange: false
  };
  isStart: boolean = true;

  constructor() { }

  ngOnInit() {
  }


  //头部选择时间
  switch(evs :any) {
    this.deviceDetail.isChange = false ;
    this.realTimeData.isChange = false ;
    evs.isChange = true
  }

}
