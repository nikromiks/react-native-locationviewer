// @flow
/* eslint-disable */
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Action } from 'app/general/types/Action';
import type { State } from 'app/general/types/State';

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;
