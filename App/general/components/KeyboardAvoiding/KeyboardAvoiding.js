// @flow
import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';

type Props = {
  children?: any
};

export default class KeyboardAvoiding extends Component<Props> {
  render() {
    const behavior = Platform.OS === 'ios' ? 'position' : null;
    return (
      <KeyboardAvoidingView {...this.props} behavior={behavior}>
        {this.props.children}
      </KeyboardAvoidingView>
    );
  }
}
