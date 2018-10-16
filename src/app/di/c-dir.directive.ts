import { Directive } from '@angular/core';
import { CService } from './c.service';

@Directive({
  selector: '[cDir]',
  providers: [CService]
})
export class CDirDirective {

  constructor() { }

}
