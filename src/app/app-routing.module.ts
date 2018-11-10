import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [{
  path: 'todo',
  loadChildren: './todo/todo.module#TodoModule'
}, {
  path: '',
  redirectTo: 'todo',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
