/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import DashBoard from './src/screens/Dashboard'
import Login from './src/screens/Login'
import { Accordion } from 'native-base'

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  },
});

const StackNav = createStackNavigator({
  Dashboard: {
    screen: DashBoard
  },
  Login: {
    screen: Login
  },
})

const AppContainer = createAppContainer(StackNav)

export default class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
      </>
    );
  }
}
