// @flow
import React, {Component} from 'react';
import {FlatList} from 'react-native';

import I18n from 'app/general/locale/Translations';
import {resetAction, renderNavBarButton} from 'app/navigator/AppNavigator';
import routes from 'app/navigator/routes';

import styles from 'app/screens/list/styles/ListStyles';
import ListItemComponent from 'app/screens/list/components/ListItemComponent';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';
import type {State} from 'app/general/types/State';

type Props = {
  navigation: any,
  pins: Array<LocationEntity>
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

  handlePressItem = (item) => {
    this.props.navigation.navigate(routes.Detail, {item});
  };

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.props.pins}
        keyExtractor={(item) => item.name}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({item}) => {
    return (
      <ListItemComponent
        key={item.name}
        onPress={this.handlePressItem}
        pin={item}
      />
    );
  };
}

const mapStateToProps = ({location}: State) => {
  return {
    pins: location.entities,
  };
};

export default connect(mapStateToProps, actions)(ListContainer);
