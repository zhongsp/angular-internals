import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/counter.reducer';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducer)
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
