import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-slide2',
  templateUrl: './slide2.component.html',
  styleUrls: ['./slide2.component.scss']
})
export class Slide2Component implements OnInit, OnChanges {
  @Input() name:string = '';

  constructor() { }

  ngOnInit() {
    console.log("OnInit");
  }

  ngOnChanges(v) {
    // debugger;
    console.log("OnChanges");
  }
}
