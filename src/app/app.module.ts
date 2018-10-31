import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { SharedModule } from "./shared/shared.module";
import { API_CONFIG, ApiConfigValue } from "./core/api-config";
import { DiModule } from "./di/di.module";
import { ChangeDetectionModule } from "./change-detection/change-detection.module";
import { CustomHttpInterceptor } from "./core/http-interceptor";
import { CounterModule } from "./counter/counter.module";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent, LifecycleHooksComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    DiModule,
    ChangeDetectionModule,
    CounterModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    // StoreDevtoolsModule.instrument({
    //   name: 'Angular Sample App',
    //   maxAge: 20,
    //   logOnly: environment.production
    // }),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'Angular Sample App',
      maxAge: 2,
      logOnly: environment.production
    }) : [],
  ],
  providers: [
    { provide: API_CONFIG, useValue: ApiConfigValue },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
