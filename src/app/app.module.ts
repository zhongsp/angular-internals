import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { SharedModule } from "./shared/shared.module";
import { API_CONFIG, ApiConfigValue } from "./core/api-config";
import { DiModule } from "./di/di.module";

@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    DiModule
  ],
  providers: [
    { provide: API_CONFIG, useValue: ApiConfigValue }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
