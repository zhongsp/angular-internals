import { Component } from '@angular/core';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'AppComponent';
  times: number = 3;

  constructor() { }
}
