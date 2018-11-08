import { initialState, State } from './state';
import { Actions, ActionType } from './actions';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.LoadItems:
      return state;
    case ActionType.LoadItemsSuccess:
      return {
        ...state,
        items: action.payload.items
      };
    case ActionType.LoadItemsFailure:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
}
