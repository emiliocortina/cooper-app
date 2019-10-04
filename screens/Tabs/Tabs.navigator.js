import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './Home/Home.screen';
import StatsScreen from './Stats/Stats.screen';
import Icon from 'react-native-vector-icons/Feather';
import SearchScreen from './Search/Search.screen';

const HomeTab = HomeScreen;
HomeTab.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    let IconComponent = Icon;

    // You can return any component that you like here!
    return <IconComponent name={'home'} size={25} color={tintColor} />;
  },
};

const StatsTab = StatsScreen;
StatsTab.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    let IconComponent = Icon;

    // You can return any component that you like here!
    return <IconComponent name={'activity'} size={25} color={tintColor} />;
  },
};

const SearchTab = SearchScreen;
SearchTab.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    let IconComponent = Icon;

    // You can return any component that you like here!
    return <IconComponent name={'search'} size={25} color={tintColor} />;
  },
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Stats: StatsTab,
    Search: SearchTab,
  },
  {
    tabBarOptions: {
      activeTintColor: '#e06075',
      inactiveTintColor: 'rgba(0,0,0,0.6)',
      showLabel: false,
      style: {
        shadowColor: 'rgba(58,55,55,0.1)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 15,
        borderTopColor: 'transparent',
        backgroundColor: '#fff',
        borderRadius: 2000,
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
