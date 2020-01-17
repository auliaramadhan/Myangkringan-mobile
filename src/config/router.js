import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {
  Home,
  Login,
  Profile,
  Restaurant,
  Register,
  DetailProduct,
} from '../screens';

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const BottomNavigationStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Store',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="food" type='MaterialCommunityIcons' style={{ color: tintColor }} />
        ),
      },
    },
    Restaurant: {
      screen: Restaurant,
      navigationOptions: {
        tabBarLabel: 'Restaurant',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="store" type='MaterialIcons' style={{ color: tintColor }} />
        ),
      },
    },
    Order: {
      screen: DetailProduct,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="check" type='MaterialIcons' style={{ color: tintColor }} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon type='FontAwesome' name="user" style={{ color: tintColor }} />
        ),
      },
    },
  },
  {

    tabBarOptions: {
      activeBackgroundColor: '#ddd',
      activeTintColor: 'chocolate',
      inactiveTintColor: '#111',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,

      },
    },
  },
);

const AppStackNavigation = createStackNavigator(
  {
    DetailProduct: { screen: DetailProduct },
  },
  {
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    AuthStack,
    BottomNavigationStack,
    AppStackNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'BottomNavigationStack',
  },
);

export default createAppContainer(Router);
