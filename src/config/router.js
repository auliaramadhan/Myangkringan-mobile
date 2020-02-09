import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {
  Home,
  Login,
  Profile,
  Restaurant,
  Register,
  DetailProduct,
  MyOrder,
  Cart,
  ByRestaurant,
  Splash,
  ChangePassword,
} from '../screens';
import Search from '../screens/Search';

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    Register: {screen: Register},
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
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="food"
            type="MaterialCommunityIcons"
            style={{color: tintColor}}
          />
        ),
      },
    },
    Restaurant: {
      screen: Restaurant,
      navigationOptions: {
        tabBarLabel: 'Restaurant',
        tabBarIcon: ({tintColor}) => (
          <Icon name="store" type="MaterialIcons" style={{color: tintColor}} />
        ),
      },
    },
    MyOrder: {
      screen: MyOrder,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({tintColor}) => (
          <Icon name="check" type="MaterialIcons" style={{color: tintColor}} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon type="FontAwesome" name="user" style={{color: tintColor}} />
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
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
      },
    },
  },
);

const AppStackNavigation = createStackNavigator(
  {
    BottomNavigationStack,
    DetailProduct: {screen: DetailProduct},
    Cart: {screen: Cart},
    ByRestaurant: {screen: ByRestaurant},
    Search: {screen: Search},
    ChangePassword: {screen: ChangePassword},
  },
  {
    headerMode: 'none',
  },
);
const SplashNavigation = createStackNavigator(
  {
    Splash: {screen: Splash},
  },
  {
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    AuthStack,
    AppStackNavigation,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
    // initialRouteName: 'AuthStack',
  },
);

export default createAppContainer(Router);
