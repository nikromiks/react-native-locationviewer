import RNFetcher from 'react-native-fetcher';
import actions from 'app/general/actions';

import {REHYDRATE} from 'redux-persist/lib/constants';

const URL = 'http://bit.ly/test-locations';

export default (store) => {

  return (next) => (action) => {
    switch (action.type) {
      case REHYDRATE: {
        RNFetcher.loadLocationListFromUrl(URL, (data) => {
          console.log(data);
          const result = JSON.parse(data);
          console.log(result);

          store.dispatch(actions.locationLoadPoints(result.locations));
        }, (error, exception) => {
          console.log(error, exception);
        });

        break;
      }

    }

    next(action);
  };
};
