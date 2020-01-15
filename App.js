/* eslint-disable prettier/prettier */
import React, { Component, Fragment } from 'react';
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Playstore from './src/screens/Playstore'
import Dashboard from './src/screens/Dashboard'
// import { StyleSheet, } from 'react-native';
// import { Icon, Container, Content, Text, Row, Item, Input, Tabs, Tab, TabHeading, ScrollableTab, Footer, FooterTab, Button, Header } from 'native-base'



export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Playstore /> */}
        <Home />
        {/* <Dashboard /> */}
        {/* <Login /> */}
      </Fragment>
    );
  }
}

