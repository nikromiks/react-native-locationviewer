// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from 'app/general/components/NavBarActionButton/NavBarActionButtonStyles';
import debounceHandler from 'app/general/components/debounceHandler/debounceHandler';

type Props = {
  children: any,
  containerStyles?: any,
  onPress?: () => void,
  isEnabled: boolean
};

export default class NavBarActionButton extends Component<Props> {
  static defaultProps = {
    isEnabled: true
  };

  handlePress = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  shouldComponentUpdate(nextProps: Props) {
    return !_.isEqual(nextProps, this.props);
  }

  render() {
    if (this.props.isEnabled) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={debounceHandler(this.handlePress)}
          style={[styles.root, this.props.containerStyles]}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }
    return (
      <View style={[styles.root, this.props.containerStyles]}>{this.props.children}</View>
    );
  }
}
