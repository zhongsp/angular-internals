import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { StructuralDirectiveDirective } from './structural-directive.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentTimeComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective,
    ReversePipe
  ],
  exports: [
    CurrentTimeComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective,
    ReversePipe
  ]
})
export class SharedModule { }
