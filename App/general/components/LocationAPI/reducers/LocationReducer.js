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
  +entities: Array<LocationEntity>
};

const initialState: State = {
  updated: '2016-12-01T06:52:08Z',
  entities: [
    {
      name: 'Milsons Point',
      lat: -33.850750,
      lng: 151.212519,
      note: '',
    },
  ],
};

function handleLoadPoints(state: State, action: Action) {
  const mergedItems = _.unionBy(state.entities, action.payload.items, 'name');
  const result = _.map(mergedItems, item => {
    return {
      ...item,
      note: '',
    };
  });

  return {
    ...state,
    entities: result,
  };
}


function handleAddPoint(state: State, action) {
  let entities = _.cloneDeep(state.entities);
  entities.push(action.payload);

  return {
    ...state,
    entities,
  };
}

function handleUpdatePoint(state, action) {
  let entities = _.cloneDeep(state.entities);
  let itemIndex = _.findIndex(entities, {'name': action.payload.name});

  entities[itemIndex] = action.payload;

  return {
    ...state,
    entities,
  };
}

export default createReducer(
  {
    [ActionTypes.LOCATION_API_LOAD_POINTS]: handleLoadPoints,
    [ActionTypes.LOCATION_API_ADD_POINT]: handleAddPoint,
    [ActionTypes.LOCATION_API_UPDATE_POINT]: handleUpdatePoint,
  },
  initialState,
);


