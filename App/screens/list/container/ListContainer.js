// @flow
import React, {Component} from 'react';
import {View} from 'react-native';

import I18n from 'app/general/locale/Translations';
import {renderNavBarButton} from 'app/navigator/AppNavigator';
import {resetAction} from 'app/navigator/AppNavigator';
import routes from 'app/navigator/routes';

import styles from 'app/screens/list/styles/ListStyles';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import type {State} from 'app/general/types/State';

type Props = {
  navigation: any,
};

function renderRightComponent({state}: any) {
  const openMapCallback = state.params && state.params.openMapCallback;
  return renderNavBarButton(openMapCallback, I18n.t('list.buttons.map'));
}

class ListContainer extends Component<Props> {
  // what's required for navigation buttons in Navigation bar
  static navigationOptions = ({navigation}) => ({
    headerRight: renderRightComponent(navigation),
  });

  componentWillMount() {
    this.props.navigation.setParams({
      openMapCallback: this.handleOpenMap,
    });
  }

  handleOpenMap = () => {
    this.props.navigation.dispatch(resetAction(routes.Map));
  };

  render() {
    return (
      <View/>
    );
  }
}

const mapStateToProps = ({system}: State) => {
  return {
    isOnline: false,
  };
};

export default connect(mapStateToProps, actions)(ListContainer);
