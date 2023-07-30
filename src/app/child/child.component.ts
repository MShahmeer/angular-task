import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // inputs:["parentData"]
  outputs:['childEvent']
})
export class ChildComponent implements OnInit {

  // parentData: any

  // using event emitter for custom event
  childEvent =  new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(val: any){
    this.childEvent.emit(val)
  }

}
