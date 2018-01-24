// @flow
import createReducer from 'app/general/reducers/createReducer';
import ActionTypes from 'app/screens/map/actions/MapActionTypes';

import type {Action} from 'app/general/types/Action';

export type Region = {
  latitude: number,
  latitudeDelta: number,
  longitude: number,
  longitudeDelta: number,
};

type State = {
  +region: Region,
};

const initialState: State = {
  region: {
    latitude: -33.881099,
    latitudeDelta: 0.343800,
    longitude: 151.236699,
    longitudeDelta: 0.257537,
  },
};

function handleUpdateRegion(state: State, action: Action) {
  return {
    ...state,
    region: action.payload,
  };
}

export default createReducer(
  {
    [ActionTypes.MAP_UPDATE_REGION]: handleUpdateRegion,
  },
  initialState,
);
