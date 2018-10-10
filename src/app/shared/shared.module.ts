import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { StructuralDirectiveDirective } from './structural-directive.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentTimeComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective
  ],
  exports: [
    CurrentTimeComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective
  ]
})
export class SharedModule { }
