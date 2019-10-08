/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabNavigator from './screens/Tabs/Tabs.navigator';
import { createStackNavigator } from 'react-navigation';
import DetailsScreen from './screens/Details/Details.screen';
import LoginScreen from './screens/Login/Login.screen';

const AppNavigator = createStackNavigator(
  {
    Tabs: TabNavigator,
    Details: DetailsScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Tabs',
    headerMode: 'none',
  },
);

export default AppNavigator;
