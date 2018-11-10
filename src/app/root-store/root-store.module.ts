import { NgModule } from '@angular/core';
import { TodoStoreModule } from './todo-store/todo-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    TodoStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class RootStoreModule {}
