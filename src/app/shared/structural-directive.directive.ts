import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[sampleStructuralDirective]'
})
export class StructuralDirectiveDirective implements OnInit {

  @Input() set sampleStructuralDirective(times: number) {
    console.log('times = ', times);
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(
        this.templateRef, {
          'index': i
        });
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    console.log(this.templateRef);
    console.log(this.viewContainer);
  }

}
