// @flow
import ActionTypes from 'app/general/components/LocationAPI/actions/LocationApiActionTypes';
import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';

function locationAddPoint(name, lat, lng) {
  return {
    type: ActionTypes.LOCATION_API_ADD_POINT,
    payload: {
      name,
      lat,
      lng,
      note: ''
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

function locationLoadPoints(items: Array<LocationEntity>) {
  return {
    type: ActionTypes.LOCATION_API_LOAD_POINTS,
    payload: {
      items,
    },
  };
}

module.exports = {
  locationAddPoint,
  locationUpdatePoint,
  locationLoadPoints,
};
