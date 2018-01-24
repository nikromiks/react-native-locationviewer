// @flow
/* eslint-disable */
import type { Action } from 'app/general/types/Action';

type Reducer<S, A: Action> = (S, A) => S;

export default function createReducer<S, A: *>(
  handlers: { [key: string]: Reducer<S, A> },
  initialState: S
): Reducer<S, A> {
  return function(state: S = initialState, action: A): S {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  };
}
