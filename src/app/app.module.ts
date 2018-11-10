import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { LifecycleHooksComponent } from "./lifecycle-hooks/lifecycle-hooks.component";
import { SharedModule } from "./shared/shared.module";
import { API_CONFIG, ApiConfigValue } from "./core/api-config";
import { DiModule } from "./di/di.module";
import { ChangeDetectionModule } from "./change-detection/change-detection.module";
import { CustomHttpInterceptor } from "./core/http-interceptor";
import { environment } from "src/environments/environment";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleNavComponent } from './sample-nav/sample-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RootStoreModule } from './root-store';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, LifecycleHooksComponent, SampleNavComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    DiModule,
    ChangeDetectionModule,
    TodoModule,
    // CounterModule,
    RootStoreModule,
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
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: API_CONFIG, useValue: ApiConfigValue },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
