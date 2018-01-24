// @flow
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import I18n from 'app/general/locale/Translations';
import {renderNavBarButton} from 'app/navigator/AppNavigator';
import {resetAction} from 'app/navigator/AppNavigator';
import routes from 'app/navigator/routes';

import styles from 'app/screens/map/styles/MapStyles';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import type {State} from 'app/general/types/State';

type Props = {
  navigation: any,
};

function renderRightComponent({state}: any) {
  const openListCallback = state.params && state.params.openListCallback;
  return renderNavBarButton(openListCallback, I18n.t('map.buttons.list'));
}

class ListContainer extends Component<Props> {
  // what's required for navigation buttons in Navigation bar
  static navigationOptions = ({navigation}) => ({
    headerRight: renderRightComponent(navigation),
  });

  componentWillMount() {
    this.props.navigation.setParams({
      openListCallback: this.handleOpenList,
    });
  }

  handleOpenList = () => {
    this.props.navigation.dispatch(resetAction(routes.List));
  };

  render() {
    return (
      <View style={styles.root}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{...StyleSheet.absoluteFillObject}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({system}: State) => {
  return {};
};

export default connect(mapStateToProps, actions)(ListContainer);
