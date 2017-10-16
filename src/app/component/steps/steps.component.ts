import {Component, Input, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'steps',
  templateUrl: 'steps.component.html',
  styleUrls:['steps.component.css']
})

export class StepsComponent implements OnInit {
  @Input() waitAccept: boolean = true;
  @Input() contract:boolean = false;
  @Input() deliverGoods :boolean =false;
  @Input() takeGoods : boolean =false;
  @Input() finish : boolean =false;


  constructor() {
  }

  ngOnInit() {
  }
}
