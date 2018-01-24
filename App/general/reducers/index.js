// @flow
import system from 'app/general/components/SystemAPI/reducers/SystemApiReducer';
import location from 'app/general/components/LocationAPI/reducers/LocationReducer';
import map from 'app/screens/map/reducers/MapReducer';

const reducers = {
  system,
  location,
  map
};

export type Reducers = typeof reducers;

export default reducers;
