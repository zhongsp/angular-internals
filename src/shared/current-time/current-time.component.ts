import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {
  private time: string;

  constructor() {
    this.time = '';
  }

  ngOnInit() {
    this.time = new Date().toString();
  }

}
