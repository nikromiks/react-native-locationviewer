// @flow
import { createAction } from 'redux-actions';
import ActionTypes from 'app/general/components/SystemAPI/actions/SystemApiActionTypes';

import { type AppStatus } from 'app/general/components/SystemAPI/constants/SystemApiStatus';

const systemApiChangeNetState = createAction(ActionTypes.SYSTEM_API_CHANGE_NET_STATE);

function systemApiChangeAppState(prev: AppStatus, next: AppStatus) {
  return {
    type: ActionTypes.SYSTEM_API_CHANGE_APP_STATE,
    payload: { prev, next }
  };
}

module.exports = {
  systemApiChangeAppState,
  systemApiChangeNetState
};
