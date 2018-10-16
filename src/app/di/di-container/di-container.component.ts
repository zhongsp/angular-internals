import { Component, OnInit } from '@angular/core';
import { XService } from '../x.service';
import { ADirDirective } from '../a-dir.directive';

@Component({
  selector: 'di-container',
  template: `
    <section class="di-container">
      <em>&lt;di-container&gt; view</em><br>
      <ng-content></ng-content>
    </section>
  `,
  styles: ['.di-container { border: 1px solid red; padding: 8px; }'],
  // providers: [XService]
})
export class DiContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
