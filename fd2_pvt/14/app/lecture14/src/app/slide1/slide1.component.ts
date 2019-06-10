import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.scss']
})
export class Slide1Component implements OnInit {
  _showBtn: boolean = false;
  data: string = 'Data at the beginning';

  constructor() {
    setTimeout(() => {
      this._showBtn = true;
    }, 5000);
  }

  ngOnInit() {
  }

  get showBtn() {
    return this._showBtn;
  }

  updateData() {
    this.data = 'Updated Data!';
  }
}
