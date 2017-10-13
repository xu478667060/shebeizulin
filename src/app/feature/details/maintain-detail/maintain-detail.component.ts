import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maintain-detail',
  templateUrl: './maintain-detail.component.html',
  styleUrls: ['./maintain-detail.component.css']
})
export class MaintainDetailComponent implements OnInit {

  maintainState: any = {
    name: '维修状况',
    isChange: false
  };
  infoSet: any = {
    name: '信息设置',
    isChange: true
  };
  selectList = [{
    list: ["所有状态", "启用", "停用"],
    isSelect: false
  }
  ];


  constructor() {
  }

  ngOnInit() {
  }


  //头部选择事件
  switch(evs :any) {
    this.maintainState.isChange = false ;
    this.infoSet.isChange = false ;
    evs.isChange = true
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
}
