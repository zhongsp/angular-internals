import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { AttributeDirectiveDirective } from './attribute-directive.directive';
import { StructuralDirectiveDirective } from './structural-directive.directive';
import { ReversePipe } from './reverse.pipe';
import { DirExportAsDirective } from './dir-export-as.directive';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentTimeComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective,
    ReversePipe,
    DirExportAsDirective,
    FooterComponent
  ],
  exports: [
    CurrentTimeComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective,
    ReversePipe,
    DirExportAsDirective
  ]
})
export class SharedModule { }
