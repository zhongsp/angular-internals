import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { TodoStoreModule } from './todo-store/todo-store.module';

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
