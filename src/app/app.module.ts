import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { SharedModule } from "./shared/shared.module";
import { API_CONFIG, ApiConfigValue } from "./core/api-config";
import { DiModule } from "./di/di.module";
import { ChangeDetectionModule } from "./change-detection/change-detection.module";
import { CustomHttpInterceptor } from "./core/http-interceptor";

@NgModule({
  declarations: [AppComponent, LifecycleHooksComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    DiModule,
    ChangeDetectionModule
  ],
  providers: [
    { provide: API_CONFIG, useValue: ApiConfigValue },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
