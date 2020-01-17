/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import Playstore from './src/screens/Playstore'
import Dashboard from './src/screens/Dashboard'
import { Provider } from 'react-redux';
import { store,persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import { createStackNavigator } from 'react-navigation-stack';
import {Home, Login, Profile, Restaurant,Register,DetailProduct} from './src/screens/';
// import { StyleSheet, } from 'react-native';
// import { Icon, Container, Content, Text, Row, Item, Input, Tabs, Tab, TabHeading, ScrollableTab, Footer, FooterTab, Button, Header } from 'native-base'

const AppNavigator = createStackNavigator({
  Dashboard: { screen: Dashboard},
  Home: { screen: Home },
  Login: { screen: Login},
  Profile: { screen: Profile},
  Restaurant: { screen: Restaurant},
  Register: { screen: Register},
  DetailProduct: { screen: DetailProduct},
});


export default class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
              <PersistGate persistor={persistor} >
                <AppNavigator />
              </PersistGate>
            </Provider>
      </>
    );
  }
}
