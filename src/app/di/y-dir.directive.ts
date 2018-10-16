import { Directive } from '@angular/core';
import { YService } from './y.service';

@Directive({
  selector: '[yDir]',
  providers: [YService]
})
export class YDirDirective {

  constructor() { }

}
