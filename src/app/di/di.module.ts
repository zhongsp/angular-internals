import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiParentComponent } from './di-parent/di-parent.component';
import { DiChildComponent } from './di-child/di-child.component';
import { ADirDirective } from './a-dir.directive';
import { BDirDirective } from './b-dir.directive';
import { CDirDirective } from './c-dir.directive';
import { DiContainerComponent } from './di-container/di-container.component';
import { YDirDirective } from './y-dir.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiParentComponent,
    DiChildComponent,
    ADirDirective,
    BDirDirective,
    CDirDirective,
    DiContainerComponent,
    YDirDirective
  ],
  exports: [
    DiParentComponent,
    DiChildComponent,
    YDirDirective
  ]
})
export class DiModule { }
