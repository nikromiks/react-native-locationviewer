// @flow
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import I18n from 'app/general/locale/Translations';
import {renderNavBarButton} from 'app/navigator/AppNavigator';
import {resetAction} from 'app/navigator/AppNavigator';
import routes from 'app/navigator/routes';

import styles from 'app/screens/map/styles/MapStyles';

import Prompt from 'app/general/components/Prompt/Prompt';
import PinComponent from 'app/screens/map/components/PinComponent';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';
import type {State} from 'app/general/types/State';

type Props = {
  navigation: any,
  pins: Array<LocationEntity>,
  detailNoteEdit: (*) => void,
  locationAddPoint: (*, *, *) => void
};
type States = {
  isPromptVisible: boolean,
  latitude: number,
  longitude: number
}

function renderRightComponent({state}: any) {
  const openListCallback = state.params && state.params.openListCallback;
  return renderNavBarButton(openListCallback, I18n.t('map.buttons.list'));
}

class ListContainer extends Component<Props, States> {
  // what's required for navigation buttons in Navigation bar
  static navigationOptions = ({navigation}) => ({
    headerRight: renderRightComponent(navigation),
  });
  state = {
    isPromptVisible: false,
    latitude: 0,
    longitude: 0,
    region: {},
  };

  componentWillMount() {
    this.props.navigation.setParams({
      openListCallback: this.handleOpenList,
    });
  }

  handleOpenPrompt = ({latitude, longitude}) => {
    this.setState({
      isPromptVisible: true,
      latitude,
      longitude,
    });
  };

  handleClosePrompt = () => {
    this.setState({isPromptVisible: false});
  };

  handleSubmitPrompt = (text) => {
    this.props.locationAddPoint(text, this.state.latitude, this.state.longitude);
    this.setState({isPromptVisible: false});
  };

  handleOpenList = () => {
    this.props.navigation.dispatch(resetAction(routes.List));
  };

  onRegionChange = (region) => {
    console.log(region);
  };

  handlePressPin = (item) => {
    this.props.navigation.navigate(routes.Detail, {item});
  };

  handleAddPin = (e) => {
    this.handleOpenPrompt(e.nativeEvent.coordinate);
  };

  render() {
    return (
      <View style={styles.root}>
        <MapView
          onRegionChangeComplete={this.onRegionChange}
          provider={PROVIDER_GOOGLE}
          style={{...StyleSheet.absoluteFillObject}}
          // region={this.state.region}
          showsUserLocation={true}
          followsUserLocation={true}
          onLongPress={this.handleAddPin}
        >
          {this.props.pins.map(this.renderPin)}
        </MapView>
        {this.renderDialog()}
      </View>
    );
  }

  renderPin = (pin: *) => {
    return (
      <PinComponent
        key={pin.name}
        pin={pin}
        onPress={this.handlePressPin}
      />
    );
  };

  renderDialog = () => {

    return (
      <Prompt
        title={I18n.t('map.dialog.title')}
        placeholder={I18n.t('map.dialog.placeholder')}
        submitText={I18n.t('prompt.save')}
        visible={this.state.isPromptVisible}
        onCancel={this.handleClosePrompt}
        onSubmit={this.handleSubmitPrompt}
      />
    );
  };
}

const mapStateToProps = ({location}: State) => {
  return {
    pins: location.entities,
  };
};

export default connect(mapStateToProps, actions)(ListContainer);
