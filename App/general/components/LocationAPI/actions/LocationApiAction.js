// @flow
import ActionTypes from 'app/general/components/LocationAPI/actions/LocationApiActionTypes';
import {createAction} from 'redux-actions';
import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';

const locationLoadPointsRequest = createAction(ActionTypes.LOCATION_API_LOAD_REQUEST);
const locationLoadPointsFailed = createAction(ActionTypes.LOCATION_API_LOAD_FAILED);

function locationAddPoint(name: string, lat: number, lng: number) {
  return {
    type: ActionTypes.LOCATION_API_ADD_POINT,
    payload: {
      name,
      lat,
      lng,
      note: '',
    },
  };
}

function locationUpdatePoint(item: LocationEntity) {
  return {
    type: ActionTypes.LOCATION_API_UPDATE_POINT,
    payload: {
      ...item,
    },
  };
}

function locationLoadPointsSuccess(items: Array<LocationEntity>) {
  return {
    type: ActionTypes.LOCATION_API_LOAD_SUCCESS,
    payload: {
      items,
    },
  };
}

module.exports = {
  locationLoadPointsRequest,
  locationLoadPointsFailed,
  locationLoadPointsSuccess,
  locationAddPoint,
  locationUpdatePoint,
};
