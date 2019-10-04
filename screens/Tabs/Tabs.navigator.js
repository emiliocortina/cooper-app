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

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Stats: StatsTab,
  },
  {
    tabBarOptions: {
      activeTintColor: '#6C1D7C',
      inactiveTintColor: 'rgba(0,0,0,0.6)',
      showLabel: false,
      style: {
        shadowColor: 'rgba(58,55,55,0.1)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 15,
        borderTopColor: 'transparent',
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 20,
        marginBottom: 30,
        height: 40,
      },
      activeTabStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 4,
        borderColor: '#6C1D7C',
      },
    },
  },
);

export default TabNavigator;
