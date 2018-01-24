// @flow
import React, {Component} from 'react';
import {View} from 'react-native';

import I18n from 'app/general/locale/Translations';
import {renderNavBarButton} from 'app/navigator/AppNavigator';

import styles from 'app/screens/detail/styles/DetailStyles';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import type {State} from 'app/general/types/State';
import routes from '../../../navigator/routes';

type Props = {
  navigation: any,
};

function renderRightComponent({state}: any) {
  const saveCallback = state.params && state.params.saveCallback;
  return renderNavBarButton(saveCallback, I18n.t('detail.buttons.save'));
}

class DetailContainer extends Component<Props> {
  // what's required for navigation buttons in Navigation bar
  static navigationOptions = ({navigation}) => ({
    headerRight: renderRightComponent(navigation),
  });

  componentWillMount() {
    this.props.navigation.setParams({
      saveCallback: this.handleSave,
    });
  }

  handleSave = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.root}>
      </View>
    );
  }
}

const mapStateToProps = ({system}: State) => {
  return {};
};

export default connect(mapStateToProps, actions)(DetailContainer);
