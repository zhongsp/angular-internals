import { Action } from "@ngrx/store";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export class Increment implements Action {
  readonly type = INCREMENT;
  constructor(readonly payload: { amount: number }) { }
}

export class Decrement implements Action {
  readonly type = DECREMENT;
  // constructor(readonly payload: { amount: number }) { }
}

export type CounterActions = Increment | Decrement;
