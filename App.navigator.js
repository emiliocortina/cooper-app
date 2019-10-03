/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabNavigator from './screens/Tabs/Tabs.navigator';
import {createStackNavigator} from 'react-navigation-stack';
import DetailsScreen from './screens/Details/Details.screen';

const AppNavigator = createStackNavigator(
  {
    Tabs: TabNavigator,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Tabs',
    headerMode: 'none',
  },
);

export default AppNavigator;
