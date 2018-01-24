// @flow
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import I18n from 'app/general/locale/Translations';
import {renderNavBarButton} from 'app/navigator/AppNavigator';

import styles from 'app/screens/detail/styles/DetailStyles';

import actions from 'app/general/actions';
import {connect} from 'react-redux';

import {type LocationEntity} from 'app/general/components/LocationAPI/reducers/LocationReducer';
import type {State} from 'app/general/types/State';

function renderRightComponent({state}: any) {
  const saveCallback = state.params && state.params.saveCallback;
  return renderNavBarButton(saveCallback, I18n.t('detail.buttons.save'));
}

function renderTitleComponent(navigation) {
  const item = navigation.state.params && navigation.state.params.item;
  return (
    <Text style={styles.title}>{item.name}</Text>
  );
}

type Props = {
  navigation: any,
  item: LocationEntity,
  locationUpdatePoint: (*) => void
};

type States = {
  item: LocationEntity
}

class DetailContainer extends Component<Props, States> {
  // what's required for navigation buttons in Navigation bar
  static navigationOptions = ({navigation}) => ({
    headerRight: renderRightComponent(navigation),
    headerTitle: renderTitleComponent(navigation),
  });

  componentWillMount() {
    this.props.navigation.setParams({
      saveCallback: this.handleSave,
    });
    this.setState(() => {
      return {
        item: this.props.item,
      };
    });
  }

  handleSave = () => {
    this.props.locationUpdatePoint(this.state.item);
    this.props.navigation.goBack();
  };

  handleNoteChange = (text) => {
    this.setState((previousState) => {
      return {
        item: {
          ...previousState.item,
          note: text,
        },
      };
    });
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Name: {this.state.item.name}</Text>
        <Text style={styles.text}>Note</Text>
        <TextInput
          style={styles.inputNote}
          multiline={true}
          onChangeText={this.handleNoteChange}
          value={this.state.item.note}
        />
      </View>
    );
  }
}

const mapStateToProps = ({detail}: State, props) => {
  const params = props.navigation.state.params;
  return {
    item: params.item,
  };
};

export default connect(mapStateToProps, actions)(DetailContainer);
