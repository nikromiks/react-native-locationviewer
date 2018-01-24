// @flow
import _ from 'lodash';
import { NetInfo, AppState } from 'react-native';
import actions from 'app/general/actions';
import { NET_STATUS, APP_STATUS } from 'app/general/components/SystemAPI/constants/SystemApiStatus';

import type { Store } from 'app/general/types/Store';

class SystemAPI {
  store: Store;
  appState: string;

  subscribe(store: Store) {
    this.store = store;
    NetInfo.isConnected.addEventListener('connectionChange', this.handleNetStateChange);
    AppState.addEventListener('change', this.handleAppStateChange);
    this.appState = APP_STATUS.ACTIVE;
  }

  handleNetStateChange = _.debounce(isConnected => {
    if (isConnected) {
      this.store.dispatch(actions.systemApiChangeNetState(NET_STATUS.IS_REACHABLE));
    } else {
      this.store.dispatch(actions.systemApiChangeNetState(NET_STATUS.NONE));
    }
  }, 10);

  handleAppStateChange = (newStateValue: string) => {
    this.store.dispatch(actions.systemApiChangeAppState(this.appState, newStateValue));
    this.appState = newStateValue;
  };
}

module.exports = new SystemAPI();
