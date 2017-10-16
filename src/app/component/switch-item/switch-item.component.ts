import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'switch-item',
  templateUrl: './switch-item.component.html',
  styleUrls: ['./switch-item.component.css']
})
export class SwitchItemComponent implements OnInit {


  @Input() items:string[]

  @Output() getItem = new EventEmitter<string>()

  _select:string = "left"


  constructor() { }

  ngOnInit() {
  }

  switchItem(){
    this._select==='left'?this._select='right':this._select="left"
    this.getItem.emit(this._select)
  }

}
