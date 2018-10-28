import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

// support lazy load
export interface State extends fromRoot.State {
  counter: CounterState;
}

export interface CounterState {
  count: number;
  max: number;
}

// selector
const getCounterState = createFeatureSelector<CounterState>('counter');
export const getCount = createSelector(
  getCounterState,
  state => state.count
);
