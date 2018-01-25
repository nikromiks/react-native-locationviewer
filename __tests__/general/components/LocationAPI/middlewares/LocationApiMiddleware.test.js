import middleware from 'app/general/components/LocationAPI/middlewares/LocationApiMiddleware';
import SystemApiActionTypes from 'app/general/components/SystemAPI/actions/SystemApiActionTypes';

import * as LocationActions from 'app/general/components/LocationAPI/actions/LocationApiAction';

import {NET_STATUS} from 'app/general/components/SystemAPI/constants/SystemApiStatus';
import RNFetcher from 'react-native-fetcher';

jest.mock('react-native-fetcher', () => ({
  loadLocationListFromUrl: jest.fn()
}));

describe('Location middleware', () => {
  const createFakeStore = (fakeData, dispatcher) => ({
    getState() {
      return fakeData
    },
    dispatch(...arg) {
      dispatcher(...arg);
    }
  });
  const dispatchWithStoreOf = (storeData, dispatcher, action) => {
    let dispatched = null;
    let store = createFakeStore(storeData, dispatcher);
    const dispatch = middleware(store)(actionAttempt => dispatched = actionAttempt);
    dispatch(action);
    return dispatched
  };

  beforeEach(() => {
    RNFetcher.loadLocationListFromUrl.mockReset();
  });

  test('should handle SYSTEM_API_CHANGE_NET_STATE with NONE internet', () => {
    // Given
    const action = {
      type: SystemApiActionTypes.SYSTEM_API_CHANGE_NET_STATE,
      payload: NET_STATUS.NONE
    };

    let dispatcher = jest.fn();

    // When
    dispatchWithStoreOf(undefined, dispatcher, action);

    // Then
    expect(dispatcher.mock.calls.length).toBe(0);
    expect(RNFetcher.loadLocationListFromUrl.mock.calls.length).toBe(0);
  });

  test('should handle SYSTEM_API_CHANGE_NET_STATE with IS_REACHABLE internet', () => {
    // Given
    const action = {
      type: SystemApiActionTypes.SYSTEM_API_CHANGE_NET_STATE,
      payload: NET_STATUS.IS_REACHABLE
    };

    let dispatcher = jest.fn();

    // When
    dispatchWithStoreOf(undefined, dispatcher, action);

    // Then
    expect(dispatcher.mock.calls.length).toBe(1);
    expect(dispatcher.mock.calls[0]).toEqual([LocationActions.locationLoadPointsRequest()]);
  });

  test('should handle SYSTEM_API_CHANGE_NET_STATE with IS_REACHABLE internet and calls Fetch API', () => {
    // Given
    const action = {
      type: SystemApiActionTypes.SYSTEM_API_CHANGE_NET_STATE,
      payload: NET_STATUS.IS_REACHABLE
    };

    let dispatcher = jest.fn();

    // When
    dispatchWithStoreOf(undefined, dispatcher, action);

    // Then
    expect(RNFetcher.loadLocationListFromUrl.mock.calls.length).toBe(1);
  });
});