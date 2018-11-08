import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './reducer';
import { TodoEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('todo', reducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoStoreModule {}
