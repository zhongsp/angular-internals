import { Action } from '@ngrx/store';

import { Todo } from '../../models';

export enum ActionType {
  LoadItems = '[Todo] LoadItems',
  LoadItemsSuccess = '[Todo] LoadItemsSuccess',
  LoadItemsFailure = '[Todo] LoadItemsFailure'
}

export class LoadItemsAction implements Action {
  readonly type = ActionType.LoadItems;
}

export class LoadItemsSuccessAction implements Action {
  readonly type = ActionType.LoadItemsSuccess;
  constructor(readonly payload: { items: Todo[] }) {}
}

export class LoadItemsFailureAction implements Action {
  readonly type = ActionType.LoadItemsFailure;
  constructor(readonly payload: { error: string }) {}
}

export type Actions =
  | LoadItemsAction
  | LoadItemsSuccessAction
  | LoadItemsFailureAction;
