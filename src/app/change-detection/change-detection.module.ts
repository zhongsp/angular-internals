import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent, TodoComponent],
  exports: [TodoListComponent, TodoComponent]
})
export class ChangeDetectionModule { }
