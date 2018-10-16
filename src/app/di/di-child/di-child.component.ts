import { Component, OnInit, Injector } from '@angular/core';
import { BService } from '../b.service';
import { DService } from '../d.service';
import { AService } from '../a.service';
import { XService } from '../x.service';
import { ADirDirective } from '../a-dir.directive';
import { YDirDirective } from '../y-dir.directive';
import { DiContainerComponent } from '../di-container/di-container.component';
import { YService } from '../y.service';
import { CService } from '../c.service';

@Component({
  selector: 'di-child',
  template: `
    <section class="di-child" cDir>
      <span><em>&lt;di-child&gt; view</em></span>
    </section>
  `,
  styles: ['.di-child { border: 1px solid blue; padding: 8px; }'],
  // providers: [XService]
})
export class DiChildComponent implements OnInit {

  constructor(
    // private aService: DiChildComponent,
    private xService: XService,
  ) { }

  ngOnInit() {
    
  }

}
