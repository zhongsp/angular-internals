import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListContainerComponent } from './todo-list/todo-list.container.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListContainerComponent
  ],
  exports: [
    TodoListContainerComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
