import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sample-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {
  @Input() timestamp: number;

  public time: string;

  constructor() {
    this.time = '';
  }

  ngOnInit() {
    const ts = this.timestamp || Date.now();

    this.time = new Date(ts).toString();
  }

}
