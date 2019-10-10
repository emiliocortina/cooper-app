import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./Home/Home.screen";
import StatsScreen from "./Stats/Stats.screen";
import { Feather } from "@expo/vector-icons";
import SearchScreen from "./Search/Search.screen";
import { Colors, Typography } from "cooper/styles";
import { Platform } from "react-native";
import i18n from "../../i18n";

const IconComponent = Feather;

const HomeTab = HomeScreen;
HomeTab.navigationOptions = {
  tabBarLabel: i18n.t("tabs.home.tabLabel"),
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    return <IconComponent name={"home"} size={25} color={tintColor} />;
  }
};

const StatsTab = StatsScreen;
StatsTab.navigationOptions = {
  tabBarLabel: i18n.t("tabs.stats.tabLabel"),
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    return <IconComponent name={"activity"} size={25} color={tintColor} />;
  }
};

const SearchTab = SearchScreen;
SearchTab.navigationOptions = {
  tabBarLabel: i18n.t("tabs.search.tabLabel"),
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    return <IconComponent name={"search"} size={25} color={tintColor} />;
  }
};

let floatingTabBar = {};

if (Platform.OS === "ios") {
  floatingTabBar = {
    position: "absolute",
    left: 80,
    bottom: 0,
    right: 80,
    marginBottom: 26,
    height: 50
  };
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeTab,
    Stats: StatsTab,
    Search: SearchTab
  },
  {
    tabBarOptions: {
      activeTintColor: "#e06075",
      inactiveTintColor: "#8F9091",
      showLabel: false,
      safeAreaInset: { bottom: "never", top: "never" },
      style: {
        ...floatingTabBar,
        shadowColor: "rgba(58,55,55,0.1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        borderTopColor: "transparent",
        backgroundColor: "white",
        borderRadius: 2000
      }
    }
  }
);

export default TabNavigator;
