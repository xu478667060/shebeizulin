import {Component, Input, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'down-select',
  templateUrl: 'down-select.component.html'
})

export class DownSelectComponent implements OnInit {

  @Input() selectList:string[]

  constructor() {
  }

  ngOnInit() {
  }
}
