// @flow
import React from 'react';
import {Text} from 'react-native';
import {NavigationActions, StackNavigator} from 'react-navigation';
import NavBarActionButton from 'app/general/components/NavBarActionButton/NavBarActionButton';
import I18n from 'app/general/locale/Translations';

import routes, {type Routes} from 'app/navigator/routes';
import ListContainer from 'app/screens/list/container/ListContainer';
import DetailContainer from 'app/screens/detail/container/DetailContainer';
import MapContainer from 'app/screens/map/container/MapContainer';

export function renderNavBarButton(onPress: () => void,
                                   children?: any,
                                   containerStyles?: any,
                                   isEnabled: boolean = true) {
  function text(value: string) {
    return <Text allowFontScaling={false}>{value}</Text>;
  }

  if (children) {
    return (
      <NavBarActionButton
        onPress={onPress} containerStyles={containerStyles}
        isEnabled={isEnabled}
      >
        {typeof children === 'string' ? text(children) : children}
      </NavBarActionButton>
    );
  }
}

function renderBackButton(navigation: any) {
  return renderNavBarButton(
    navigation.goBack,
    I18n.t('buttons.back'),
  );
}

export function resetAction(route: Routes) {
  return NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({routeName: route}),
    ],
  });
}

const screenRoutes = {
  [routes.List]: {
    screen: ListContainer,
    navigationOptions: () => ({
      title: I18n.t('list.title'),
    }),
  },
  [routes.Detail]: {
    screen: DetailContainer,
    navigationOptions: ({navigation}) => ({
      title: I18n.t('detail.title'),
      headerLeft: renderBackButton(navigation),
    }),
  },
  [routes.Map]: {
    screen: MapContainer,
    navigationOptions: () => ({
      title: I18n.t('map.title'),
    }),
  },
};

export default StackNavigator(screenRoutes);
