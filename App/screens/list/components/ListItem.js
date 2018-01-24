// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

type Props = {
  onActionPress: () => void,
  text: string,
  distance: number
};

export default class ListItem extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onActionPress}>
        {this.renderDetails()}
      </TouchableOpacity>
    );
  }

  renderDetails() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.iconText}>{this.props.text}</Text>
        <Text style={styles.iconText}>{this.props.distance} km</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});
