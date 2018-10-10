import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[sampleAttributeDirective]'
})
export class AttributeDirectiveDirective implements OnInit {

  @Input() sampleAttributeDirective: string;

  constructor(private ele: ElementRef) {
    console.log('ElementRef = ', ele);
  }

  /**
   * All avaliable events:
   * {@link https://github.com/angular/angular/blob/6.1.9/packages/compiler/src/schema/dom_element_schema_registry.ts#L78}
   */
  @HostListener('click', ['$event', '$event.clientX']) onClick($event, clientX) {
    console.log('Click', $event, clientX);
  }

  ngOnInit() {
    console.log('@Input sampleAttributeDirective = ', this.sampleAttributeDirective);
  }

}
