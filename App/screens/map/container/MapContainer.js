// @flow
import React, {Component} from 'react';

import I18n from 'app/general/locale/Translations';
import {resetAction, renderNavBarButton} from 'app/navigator/AppNavigator';
import routes from 'app/navigator/routes';

import MapViewComponent from 'app/screens/map/components/MapViewComponent';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import type {Region} from 'app/screens/map/reducers/MapReducer';
import type {LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';
import type {State} from 'app/general/types/State';

type Props = {
  navigation: any,
  pins: Array<LocationEntity>,
  region: Region,
  detailNoteEdit: (*) => void,
  locationAddPoint: (*, *, *) => void,
  mapUpdateRegion: (Region) => void,
};

function renderRightComponent({state}: any) {
  const openListCallback = state.params && state.params.openListCallback;
  return renderNavBarButton(openListCallback, I18n.t('map.buttons.list'));
}

class MapContainer extends Component<Props> {
  // what's required for navigation buttons in Navigation bar
  static navigationOptions = ({navigation}) => ({
    headerRight: renderRightComponent(navigation),
  });

  componentWillMount() {
    this.props.navigation.setParams({
      openListCallback: this.handleOpenList,
    });
  }

  handleAddPin = (name, lat, lng) => {
    this.props.locationAddPoint(name, lat, lng);
  };

  handleOpenList = () => {
    this.props.navigation.dispatch(resetAction(routes.List));
  };

  handleOpenPin = (item) => {
    this.props.navigation.navigate(routes.Detail, {item});
  };

  handleUpdateRegion = (region) => {
    this.props.mapUpdateRegion(region);
  };

  render() {
    return (
      <MapViewComponent
        {...this.props}
        onAddPin={this.handleAddPin}
        onUpdateRegion={this.handleUpdateRegion}
        onOpenPin={this.handleOpenPin}
      />
    );
  }
}

const mapStateToProps = ({location, map}: State) => {
  return {
    pins: location.entities,
    region: map.region,
  };
};

export default connect(mapStateToProps, actions)(MapContainer);
