import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search-box',
  templateUrl: 'search-box.component.html',
  styleUrls:["search-box.component.css"],
})

export class SearchBoxComponent implements OnInit {

  @Input() placeholder:string

  @Output() searchWord = new EventEmitter<string>()

  keyWord:string

  constructor() {
  }

  ngOnInit() {
  }

  search(){
    this.searchWord.emit(this.keyWord)
    this.keyWord = ""
  }


}
