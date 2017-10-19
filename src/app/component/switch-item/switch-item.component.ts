import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'switch-item',
  templateUrl: './switch-item.component.html',
  styleUrls: ['./switch-item.component.css']
})
export class SwitchItemComponent implements OnInit {


  @Input() items:string[]

  @Output() getItem = new EventEmitter<string>()

  @Input() select:string = "left"

  constructor() { }

  ngOnInit() {
  }

  switchItem(item){
    if(this.select===item){
      return
    }
    this.select==='left'?this.select='right':this.select="left"
    this.getItem.emit(this.select)
  }

}
