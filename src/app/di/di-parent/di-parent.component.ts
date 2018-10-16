import { Component, OnInit } from '@angular/core';
import { AService } from '../a.service';
import { BService } from '../b.service';
import { XService } from '../x.service';

@Component({
  selector: 'di-parent',
  template: `
    <section class="di-parent">
      <em>&lt;di-parent&gt; view</em><br>
      <section a-dir>
        <di-container>
          <di-child></di-child>
        </di-container>
      </section>
    </section>
  `,
  styles: ['.di-parent { border: 1px solid purple; padding: 8px; }'],
  // providers: [XService]
})
export class DiParentComponent implements OnInit {

  constructor(
    // private bService: BService
    ) { }

  ngOnInit() {
    // console.log(this.bService.name);
  }

}
