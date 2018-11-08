import { Todo } from '../../models';

export interface State {
  items: Todo[];
  total: number;
  error: string | null;
}

export const initialState: State = {
  items: [],
  total: 0,
  error: null
};
