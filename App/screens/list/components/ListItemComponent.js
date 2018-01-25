// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 10
  },
  nameText: {
    fontSize: 16,
  },
  noteText: {
    fontSize: 10,
  },
});

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
        <Text style={styles.nameText}>{this.props.pin.name}</Text>
        <Text style={styles.noteText}>{this.props.pin.note}</Text>
      </View>
    );
  }
}