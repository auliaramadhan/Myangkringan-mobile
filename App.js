/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import Router from './src/config/router'
import { Root } from 'native-base';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import { Home, Login, Profile, Restaurant, Register, DetailProduct } from './src/screens/';
// const AppNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Dashboard: { screen: Dashboard },
//   Login: { screen: Login },
//   Profile: { screen: Profile },
//   Restaurant: { screen: Restaurant },
//   Register: { screen: Register },
//   DetailProduct: { screen: DetailProduct },
// },
// {
//   initialRouteName:'Login',
//   headerMode:'none'
// });

// const AppContainer = createAppContainer(AppNavigator);


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
