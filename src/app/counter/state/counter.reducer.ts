import { CounterState } from './counter.state';
import { CounterActions, INCREMENT, DECREMENT } from './counter.action';

const initialState: CounterState = {
  count: 0
};

export function reducer(
  state: CounterState = initialState,
  action: CounterActions
) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload.amount
      };

    case DECREMENT:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}
