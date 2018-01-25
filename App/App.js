// @flow
import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AppNavigator from 'app/navigator/AppNavigator';
import type {State} from './general/types/State';
import {connect} from 'react-redux';
import styles from './screens/list/styles/ListStyles';

type Props = {
  isLoading: boolean
}

class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator/>
        {this.renderLoadingIndicator()}
      </View>
    );
  }

  renderLoadingIndicator = () => {
    if (this.props.isLoading) {
      return <ActivityIndicator style={styles.loadingIndicator}/>;
    }
  };
}

const mapStateToProps = ({location}: State) => {
  return {
    isLoading: location.isLoading,
  };
};

export default connect(mapStateToProps)(App);
