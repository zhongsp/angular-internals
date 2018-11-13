import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoStoreModule } from './todo-store/todo-store.module';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    TodoStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    // Instrumentation must be imported after
    // importing StoreModule (config is optional)
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'Angular Sample App',
          maxAge: 2,
          logOnly: environment.production,
        })
      : [],
  ],
})
export class RootStoreModule {}
