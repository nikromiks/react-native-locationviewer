// @flow
import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AppNavigator from 'app/navigator/AppNavigator';
import type {State} from './general/types/State';
import {connect} from 'react-redux';
import {APP_STATUS, NET_STATUS} from './general/components/SystemAPI/constants/SystemApiStatus';
import styles from './screens/list/styles/ListStyles';

class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator/>
        {this.renderLoadingIndicator()}
      </View>
    );
  }

  renderLoadingIndicator = () => {
    if (!this.props.isOnline) {
      return <ActivityIndicator style={styles.loadingIndicator}/>;
    }
  };
}

const mapStateToProps = ({system}: State) => {
  return {
    isOnline:
    system.appState.next === APP_STATUS.ACTIVE &&
    system.netState === NET_STATUS.IS_REACHABLE,
  };
};

export default connect(mapStateToProps)(App);
