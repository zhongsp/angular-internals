import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyComponent } from './empty.component';
import { NotFoundComponent } from './not-found.component';
import { ShellComponent } from './shell.component';
import { HomeModule } from './home/home.module';
import { TenantsModule } from './tenants/tenants.module';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    NotFoundComponent,
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TenantsModule, // first place, deal with '' route
    HomeModule,
    UserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),  // last place
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
