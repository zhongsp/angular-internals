import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrameworkListComponent } from './framework-list.component';
import { FrameworkComponent } from './framework.component';


const routes: Routes = [{
  path: 'frameworks',
  component: FrameworkListComponent
}, {
  path: 'framework',
  children: [{
    path: ':id',
    component: FrameworkComponent
  }]
}, {
  path: '**',
  redirectTo: 'frameworks'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
