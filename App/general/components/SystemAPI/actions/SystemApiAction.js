// @flow
import { createAction } from 'redux-actions';
import ActionTypes from 'app/general/components/SystemAPI/actions/SystemApiActionTypes';

import { type AppStatus } from 'app/general/components/SystemAPI/constants/SystemApiStatus';
import type { Action } from 'app/general/types/Action';

const systemApiChangeNetState: Action = createAction(ActionTypes.SYSTEM_API_CHANGE_NET_STATE);

function systemApiChangeAppState(prev: AppStatus, next: AppStatus): Action {
  return {
    type: ActionTypes.SYSTEM_API_CHANGE_APP_STATE,
    payload: { prev, next }
  };
}

module.exports = {
  systemApiChangeAppState,
  systemApiChangeNetState
};
