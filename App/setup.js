// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from 'app/general/store/configureStore';
import SystemApi from 'app/general/components/SystemAPI';

import App from 'app/App';

const {store, persistor} = configureStore();

type Props = {};

export default class Setup extends Component<Props> {
  constructor(props: Props) {
    super(props);
    SystemApi.subscribe(store);
  }

  handleBeforeLift = () => {
    console.info('Finished persistant.');
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          onBeforeLift={this.handleBeforeLift}
          persistor={persistor}
        >
          <App/>
        </PersistGate>
      </Provider>
    );
  }
}
