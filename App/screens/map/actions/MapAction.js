import ActionTypes from 'app/screens/map/actions/MapActionTypes';

import type {Region} from 'app/screens/map/reducers/MapReducer';

function roundNumber(num, scale) {
  if (!('' + num).includes('e')) {
    return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
  } else {
    let arr = ('' + num).split('e');
    let sig = '';
    if (+arr[1] + scale > 0) {
      sig = '+';
    }
    return +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e-' + scale);
  }
}

function mapUpdateRegion(region: Region) {
  return {
    type: ActionTypes.MAP_UPDATE_REGION,
    payload: {
      latitude: roundNumber(region.latitude, 6),
      latitudeDelta: roundNumber(region.latitudeDelta, 6),
      longitude: roundNumber(region.longitude, 6),
      longitudeDelta: roundNumber(region.longitudeDelta, 6),
    },
  };
}

module.exports = {
  mapUpdateRegion,
};
