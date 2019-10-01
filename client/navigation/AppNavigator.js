/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen.template';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen.template';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
