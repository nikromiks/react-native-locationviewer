// @flow
import system from 'app/general/components/SystemAPI/reducers/SystemApiReducer';
import location from 'app/general/components/LocationAPI/reducers/LocationReducer';

const reducers = {
  system,
  location,
};

export type Reducers = typeof reducers;

export default reducers;
