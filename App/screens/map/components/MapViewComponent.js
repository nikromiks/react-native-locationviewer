// @flow
import React, {Component} from 'react';
import {View} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import I18n from 'app/general/locale/Translations';

import styles from 'app/screens/map/styles/MapStyles';

import Prompt from 'app/general/components/Prompt/Prompt';
import PinComponent from 'app/screens/map/components/PinComponent';


import type {Region} from 'app/screens/map/reducers/MapReducer';
import type {LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';

type Props = {
  pins: Array<LocationEntity>,
  region: Region,
  detailNoteEdit: (*) => void,
  locationAddPoint: (*, *, *) => void,
  mapUpdateRegion: (Region) => void,
  onAddPin: (*, *, *) => void,
  onUpdateRegion: (*) => void,
  onOpenPin: (*) => void
};
type States = {
  isPromptVisible: boolean,
  latitude: number,
  longitude: number
}

export default class MapViewComponent extends Component<Props, States> {
  mapRef: any;
  state = {
    isPromptVisible: false,
    latitude: 0,
    longitude: 0,
  };

  handleOpenPrompt = ({latitude, longitude}: any) => {
    this.setState({
      isPromptVisible: true,
      latitude,
      longitude,
    });
  };

  handleClosePrompt = () => {
    this.setState({isPromptVisible: false});
  };

  handleSubmitPrompt = (text: string) => {
    this.props.onAddPin(text, this.state.latitude, this.state.longitude);
    this.handleClosePrompt();
  };

  handlePressPin = (item: *) => {
    if (this.mapRef) {
      this.mapRef.animateToCoordinate({
        latitude: item.lat,
        longitude: item.lng,
      });
    }
  };

  handleAddPin = (e: *) => {
    this.handleOpenPrompt(e.nativeEvent.coordinate);
  };

  bindRef = (mapRef: any) => {
    this.mapRef = mapRef;
  };

  render() {
    return (
      <View style={styles.root}>
        <MapView
          ref={this.bindRef}
          onRegionChangeComplete={this.props.onUpdateRegion}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.props.region}
          showsUserLocation={true}
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
        onPressPin={this.props.onOpenPin}
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
