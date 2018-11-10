import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  RootStoreState,
  TodoStoreSelectors,
  TodoStoreActions,
} from '../../root-store';
import { switchMap } from 'rxjs/operators';

import { Todo } from '../../models';

@Component({
  selector: 'sample-todo-list-container',
  templateUrl: './todo-list.container.html',
})
export class TodoListContainerComponent implements OnInit {
  todoItems$: Observable<Todo[]> | null;

  firstTodoItem$: Observable<Todo> | null;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.todoItems$ = this.store$.pipe(
      select(TodoStoreSelectors.selectTodoItems)
    );

    this.firstTodoItem$ = this.store$.pipe(
      select(TodoStoreSelectors.selectTodoItems),
      switchMap((todos: Todo[]) => {
        if (todos && todos.length) {
          return of<Todo>(todos[0]);
        } else {
          return of(null);
        }
      })
    );

    this.store$.dispatch(new TodoStoreActions.LoadItemsAction());
  }
}
