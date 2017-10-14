import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  waitAccept: boolean =true;

  multiBar : any =[
    {state : '待接受' , isFinish : true },
    {state : '代签合同' , isFinish : false },
    {state : '代发货' , isFinish : false },
    {state : '待收货' , isFinish : false },
    {state : '已完成' , isFinish : false },
  ];

  constructor(private router :Router) { }

  ngOnInit() {
  }

}
