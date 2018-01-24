// @flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';

import MapView from 'react-native-maps';

import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';

type Props = {
  pin: LocationEntity,
  onPress: (*) => void,
  onPressPin: (*) => void
};

export default class PinComponent extends Component<Props> {

  handlePress = () => {
    this.props.onPress(this.props.pin);
  };

  handlePressPin = () => {
    this.props.onPressPin(this.props.pin);
  };

  render() {
    const {pin} = this.props;

    return (
      <MapView.Marker
        onPress={this.handlePress}
        coordinate={{
          latitude: pin.lat,
          longitude: pin.lng,
        }}
      >
        <MapView.Callout
          onPress={this.handlePressPin}>
          <View>
            <Text>{pin.name}</Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  };
}
