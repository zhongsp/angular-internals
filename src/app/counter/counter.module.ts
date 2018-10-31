import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './state/counter.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
