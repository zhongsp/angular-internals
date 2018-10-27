import { Action } from "@ngrx/store";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = 0;

export function reducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
  
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}
