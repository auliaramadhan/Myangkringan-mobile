/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Router from './src/config/router'
import { Root } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor} >
          <Root>
            <Router />
          </Root>
          </PersistGate>
        </Provider>
      </>
    );
  }
}
