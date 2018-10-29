import { Directive } from '@angular/core';

@Directive({
  selector: '[pzExportAs]',
  exportAs: 'pzExportAs'
})
export class DirExportAsDirective {

  title: string = 'Directive exportAs sample.';

  constructor() {
    console.log('pzExportAs')
  }

  alert() {
    window.alert(this.title);
  }

}
