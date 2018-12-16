import { Route, RouterModule, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';

const routes: Route[] = [
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule',
  },
  {
    path: 'applications',
    component: ApplicationListComponent,
    children: [
      {
        path: ':id',
        component: ApplicationDetailComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
