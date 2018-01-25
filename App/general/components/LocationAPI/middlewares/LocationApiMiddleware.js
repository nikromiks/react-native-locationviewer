import RNFetcher from 'react-native-fetcher';
import actions from 'app/general/actions';

import ActionTypes from 'app/general/components/SystemAPI/actions/SystemApiActionTypes';
import {NET_STATUS} from 'app/general/components/SystemAPI/constants/SystemApiStatus';

const URL = 'http://bit.ly/test-locations';

export default (store) => {

  return (next) => (action) => {
    switch (action.type) {
      case ActionTypes.SYSTEM_API_CHANGE_NET_STATE: {
        if (action.payload === NET_STATUS.IS_REACHABLE) {
          store.dispatch(actions.locationLoadPointsRequest());

          RNFetcher.loadLocationListFromUrl(URL, (data) => {
            const result = JSON.parse(data);
            store.dispatch(actions.locationLoadPointsSuccess(result.locations));
          }, (error) => {
            console.info(error);
            store.dispatch(actions.locationLoadPointsFailed(error));
          });
        }
        break;
      }

    }

    next(action);
  };
};
