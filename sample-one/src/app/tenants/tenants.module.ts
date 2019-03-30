import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantsComponent } from './tenants.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/tenants',
  pathMatch: 'full'
},{
  path: 'tenants',
  component: TenantsComponent
}];

@NgModule({
  declarations: [
    TenantsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class TenantsModule { }
