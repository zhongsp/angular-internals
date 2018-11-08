import { createSelector } from '@ngrx/store';

import { selectTodoTotal } from './todo-store/selectors';

export const selectIsEmptyList = createSelector(
  selectTodoTotal,
  (total: number) => total === 0
);
