import { Directive } from '@angular/core';
import { CService } from './c.service';
import { BService } from './b.service';
import { AService } from './a.service';

@Directive({
  selector: '[cDir]',
  providers: [CService]
})
export class CDirDirective {

  constructor() { }

}
