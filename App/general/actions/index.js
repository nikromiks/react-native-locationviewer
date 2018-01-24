import * as SystemApiActions from 'app/general/components/SystemAPI/actions/SystemApiAction';
import * as LocationActions from 'app/general/components/LocationAPI/actions/LocationApiAction';
import * as MapActions from 'app/screens/map/actions/MapAction';

module.exports = {
  ...SystemApiActions,
  ...LocationActions,
  ...MapActions,
};
