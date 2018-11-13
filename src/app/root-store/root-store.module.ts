import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoStoreModule } from './todo-store/todo-store.module';

@NgModule({
  declarations: [],
  imports: [
    TodoStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
