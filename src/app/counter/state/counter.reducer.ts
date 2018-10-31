import { CounterState } from './counter.state';
import { CounterActions, CounterAction } from './counter.actions';

const initialState: CounterState = {
  count: 0,
  max: 10
};

export function reducer(
  state: CounterState = initialState,
  action: CounterActions
) {
  switch (action.type) {
    case CounterAction.IncreaseCount:
      return {
        count: state.count + action.payload.amount
      };

    case CounterAction.DecreaseCount:
      return {
        count: state.count - 1
      };

    case CounterAction.LoadCountSuccess:
      return {
        ...state,
        count: action.payload.count
      };

    case CounterAction.LoadCountFail:
      return {
        ...state,
        error: action.payload.reason
      };

    default:
      return state;
  }
}
