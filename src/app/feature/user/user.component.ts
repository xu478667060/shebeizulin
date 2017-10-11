import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectList1:Array<string> = ["所有状态"]

  constructor() { }

  ngOnInit() {
  }



}
