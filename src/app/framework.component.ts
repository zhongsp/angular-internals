import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-framework',
  template: `
    <p>
      framework works!
    </p>
  `,
  styles: []
})
export class FrameworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
