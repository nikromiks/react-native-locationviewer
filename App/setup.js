// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'app/general/store/configureStore';
import SystemApi from 'app/general/components/SystemAPI';

import App from 'app/App';

const store = configureStore();

type Props = {};

export default class Setup extends Component<Props> {
  constructor(props: Props) {
    super(props);
    SystemApi.subscribe(store);
  }

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
