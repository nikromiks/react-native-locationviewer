// @flow
import _ from 'lodash';
import createReducer from 'app/general/reducers/createReducer';
import ActionTypes from 'app/general/components/LocationAPI/actions/LocationApiActionTypes';

import type {Action} from 'app/general/types/Action';

export type LocationEntity = {
  name: string,
  lat: number,
  lng: number,
  note: string
};

type State = {
  +updated: string,
  +entities: Array<LocationEntity>,
  +isLoading: boolean,
  +error: ?string
};

const STUB_POINT = {
  name: 'Milsons Point',
  lat: -33.850750,
  lng: 151.212519,
  note: '',
};

export const initialState: State = {
  updated: '',
  entities: [
    STUB_POINT,
  ],
  isLoading: false,
  error: null,
};

function handleLoadPointsSuccess(state: State, action: Action) {
  if (action.payload && action.payload.items) {
    const mergedItems = _.merge(state.entities, action.payload.items);
    const result = _.map(mergedItems, item => {
      return {
        ...item,
        note: item.note || '',
      };
    });

    return {
      ...state,
      isLoading: false,
      entities: result,
    };
  }
  return state;
}

function handleLoadPointsRequest(state: State) {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
}

function handleLoadPointsFailed(state: State, action) {

  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
}


function handleAddPoint(state: State, action) {
  if (action.payload && action.payload.name) {
    let entities = _.cloneDeep(state.entities);
    entities.push(action.payload);

    return {
      ...state,
      entities,
    };
  }
  return state;
}

function handleUpdatePoint(state, action) {
  if (action.payload && action.payload.name) {
    let entities = _.cloneDeep(state.entities);
    let itemIndex = _.findIndex(entities, {'name': action.payload.name});

    if (itemIndex !== -1) {
      entities[itemIndex] = action.payload;

      return {
        ...state,
        entities,
      };
    }
    return state;
  }
  return state;
}

export default createReducer(
  {
    [ActionTypes.LOCATION_API_LOAD_SUCCESS]: handleLoadPointsSuccess,
    [ActionTypes.LOCATION_API_LOAD_REQUEST]: handleLoadPointsRequest,
    [ActionTypes.LOCATION_API_LOAD_FAILED]: handleLoadPointsFailed,
    [ActionTypes.LOCATION_API_ADD_POINT]: handleAddPoint,
    [ActionTypes.LOCATION_API_UPDATE_POINT]: handleUpdatePoint,
  },
  initialState,
);

