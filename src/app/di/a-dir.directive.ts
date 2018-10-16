import { Directive } from '@angular/core';
import { AService } from './a.service';

@Directive({
  selector: '[aDir]',
  providers: [AService]
})
export class ADirDirective {

  constructor() { }

}
