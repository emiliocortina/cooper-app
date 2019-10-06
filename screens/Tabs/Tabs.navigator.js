import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './Home/Home.screen';
import StatsScreen from './Stats/Stats.screen';
import { Feather } from '@expo/vector-icons';
import SearchScreen from './Search/Search.screen';
import {Colors, Typography} from 'cooper/styles'

const IconComponent = Feather;

const HomeTab = HomeScreen;
HomeTab.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    return <IconComponent name={'home'} size={25} color={tintColor} />;
  },
};

const StatsTab = StatsScreen;
StatsTab.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    return <IconComponent name={'activity'} size={25} color={tintColor} />;
  },
};

const SearchTab = SearchScreen;
SearchTab.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    return <IconComponent name={'search'} size={25} color={tintColor} />;
  },
};

console.log(Typography);
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Stats: StatsTab,
    Search: SearchTab,
  },
  {
    tabBarOptions: {
      activeTintColor: '#e06075',
      inactiveTintColor: '#8F9091',
      showLabel: false,
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        shadowColor: 'rgba(58,55,55,0.1)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        borderTopColor: 'transparent',
        backgroundColor: 'white',
        borderRadius: 2000,
      },
    },
  },
);

export default TabNavigator;
