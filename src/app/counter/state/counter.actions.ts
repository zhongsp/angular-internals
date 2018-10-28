import { Action } from '@ngrx/store';

// All actions
// Use a namespace like '[Counter]' for better debugging
export enum CounterAction {
  IncreaseCount = '[Counter] Increase Count',
  DecreaseCount = '[Counter] Decrease Count',
  LoadCount = '[Counter] Load Count',
  LoadCountSuccess = '[Counter] Load Count Success',
  LoadCountFail = '[Counter] Load Count Fail'
}

// Action creator
export class IncreaseCount implements Action {
  readonly type = CounterAction.IncreaseCount;

  constructor(readonly payload: { amount: number }) {}
}

// Action creator
export class DecreaseCount implements Action {
  readonly type = CounterAction.DecreaseCount;

  constructor(readonly payload: { amount: number }) {}
}

// Action creator
export class LoadCount implements Action {
  readonly type = CounterAction.LoadCount;
}

// Action creator
export class LoadCountSuccess implements Action {
  readonly type = CounterAction.LoadCountSuccess;

  constructor(readonly payload: { count: number }) {}
}

// Action creator
export class LoadCountFail implements Action {
  readonly type = CounterAction.LoadCountFail;

  constructor(readonly payload: { reason: string }) {}
}

// Provide union action creators
export type CounterActions =
  | IncreaseCount
  | DecreaseCount
  | LoadCount
  | LoadCountSuccess
  | LoadCountFail;
