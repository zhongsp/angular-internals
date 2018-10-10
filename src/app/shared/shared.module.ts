import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentTimeComponent,
    AttributeDirectiveDirective
  ],
  exports: [
    CurrentTimeComponent,
    AttributeDirectiveDirective
  ]
})
export class SharedModule { }
