// @flow
import createReducer from 'app/general/reducers/createReducer';
import ActionTypes from 'app/general/components/SystemAPI/actions/SystemApiActionTypes';
import {
  NET_STATUS,
  APP_STATUS,
  type NetStatus,
  type AppStatus
} from 'app/general/components/SystemAPI/constants/SystemApiStatus';

import type { Action } from 'app/general/types/Action';

type State = {
  +appState: {
    prev: AppStatus,
    next: AppStatus
  },
  +netState: NetStatus
};

const initialState: State = {
  appState: {
    prev: APP_STATUS.INACTIVE,
    next: APP_STATUS.ACTIVE
  },
  netState: NET_STATUS.IS_REACHABLE
};

function handleChangeNetStatus(state: State, action: Action) {
  return {
    ...state,
    netState: action.payload
  };
}

function handleChangeAppStatus(state: State, action: Action) {
  return {
    ...state,
    appState: action.payload
  };
}

export default createReducer(
  {
    [ActionTypes.SYSTEM_API_CHANGE_APP_STATE]: handleChangeAppStatus,
    [ActionTypes.SYSTEM_API_CHANGE_NET_STATE]: handleChangeNetStatus
  },
  initialState
);
