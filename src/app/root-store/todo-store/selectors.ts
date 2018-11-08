import { State } from './state';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

// selector is a pure funciton, so it could be memorized

const getItems = (state: State) => state.items;
const getTotal = (state: State) => state.total;
const getError = (state: State) => state.error;

export const selectTodoState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('todo');

export const selectTodoItems = createSelector(selectTodoState, getItems);

export const selectTodoTotal = createSelector(selectTodoState, getTotal);

export const selectTodoLoadError = createSelector(selectTodoState, getError);
