import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListContainerComponent } from './todo-list/todo-list.container';

const routes: Routes = [{
  path: '',
  component: TodoListContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
