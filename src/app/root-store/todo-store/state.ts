import { Todo } from '../../models';

export interface State {
  items: Todo[];
  total: number;
}
