import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodosService } from 'src/app/core/todos.service';
import { CounterAction, LoadCountSuccess, LoadCountFail } from './counter.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Todo } from 'src/app/core/todo';
import { of } from 'rxjs';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private todoService: TodosService) {}

  @Effect()
  loadTodoCount$ = this.actions$.pipe(
    ofType(CounterAction.LoadCount),
    mergeMap(action =>
      this.todoService
        .listTodos()
        .pipe(
          map((todos: Todo[]) => new LoadCountSuccess({ count: todos.length })),
          catchError(err => of(new LoadCountFail({ reason: 'Error occurred.' })))
        )
    )
  );
}
