import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { TodosService } from '../../core/todos.service';
import { Observable, of } from 'rxjs';
import { Todo } from '../../models';
import { ActionType, LoadItemsSuccessAction, LoadItemsFailureAction } from './actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';


@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodosService) {}

  @Effect()
  loadItemsEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ActionType.LoadItems),
    mergeMap(action =>
      this.todoService
        .listTodos()
        .pipe(
          map((todos: Todo[]) => new LoadItemsSuccessAction({ items: todos })),
          catchError(err => of(new LoadItemsFailureAction({ error: err })))
        )
    )
  );
}
