import { Directive } from '@angular/core';
import { BService } from './b.service';

@Directive({
  selector: '[bDir]',
  providers: [BService]
})
export class BDirDirective {

  constructor() { }

}
