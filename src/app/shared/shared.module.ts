import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentTimeComponent } from './current-time/current-time.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CurrentTimeComponent],
  exports: [CurrentTimeComponent]
})
export class SharedModule { }
