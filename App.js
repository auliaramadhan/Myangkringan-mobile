/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Playstore from './src/screens/Playstore'
import Dashboard from './src/screens/Dashboard'
import { Provider } from 'react-redux';
import { store,persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
// import { StyleSheet, } from 'react-native';
// import { Icon, Container, Content, Text, Row, Item, Input, Tabs, Tab, TabHeading, ScrollableTab, Footer, FooterTab, Button, Header } from 'native-base'



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} ></PersistGate>
        {/* <Playstore /> */}
        <Home />
        {/* <Dashboard /> */}
        {/* <Login /> */}
      </Provider>
    );
  }
}

