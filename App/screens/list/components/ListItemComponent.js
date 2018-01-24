// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';

type Props = {
  onPress: (*) => void,
  pin: LocationEntity
};

export default class ListItemComponent extends React.Component<Props> {

  handlePress = () => {
    this.props.onPress(this.props.pin);
  };

  render() {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this.handlePress}>
        {this.renderDetails()}
      </TouchableOpacity>
    );
  }

  renderDetails() {
    return (
      <View style={styles.container}>
        <Text style={styles.iconText}>{this.props.pin.name}</Text>
        <Text style={styles.iconText}> 10 km</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 10
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});
