import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './Home/Home.screen';
import StatsScreen from './Stats/Stats.screen';
import TabBarIcon from '../../components/TabBarIcon';

const HomeTab = HomeScreen;
HomeTab.navigationOptions = {
  tabBarLabel: 'Home',
  /*
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  */
};

const StatsTab = StatsScreen;
StatsTab.navigationOptions = {
  tabBarLabel: 'Stats',
  /*
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  */
};

const TabNavigator = createBottomTabNavigator({
  Home: HomeTab,
  Stats: StatsTab,
});

export default TabNavigator;
