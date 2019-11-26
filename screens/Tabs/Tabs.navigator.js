import React from "react";
import HomeScreen from "./Home/Home.screen";
import StatsScreen from "./Stats/Stats.screen";
import {Feather} from "@expo/vector-icons";
import SearchScreen from "./Search/Search.screen";
import {Platform} from "react-native";
import i18n from "../../i18n";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const IconComponent = Feather;
const Tabs = createBottomTabNavigator();

let floatingTabBar = {};

if (Platform.OS === "ios") {
    floatingTabBar = {
        position: "absolute",
        left: 80,
        bottom: 0,
        right: 80,
        marginBottom: 26,
        height: 50,
        paddingBottom: 0,
    };
}

const barOptions = {
    activeTintColor: "#e06075",
    inactiveTintColor: "#8F9091",
    showLabel: false,
    safeAreaInset: {bottom: "never", top: "never"},
    style: {
        ...floatingTabBar,
        shadowColor: "rgba(58,55,55,0.1)",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
        borderTopColor: "transparent",
        borderRadius: 2000
    }
}

const TabNavigator = () => {
    return (
        <Tabs.Navigator tabBarOptions={barOptions}>
            <Tabs.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: i18n.t("tabs.home.tabLabel"),
                tabBarIcon: ({color, size}) => {
                    return <IconComponent name={"home"} size={size} color={color}/>;
                }
            }}/>
            <Tabs.Screen name="Stats" component={StatsScreen} options={{
                tabBarLabel: i18n.t("tabs.stats.tabLabel"),
                tabBarIcon: ({color, size}) => {
                    return <IconComponent name={"activity"} size={size} color={color}/>;
                }
            }}/>
            <Tabs.Screen name="Search" component={SearchScreen} options={{
                tabBarLabel: i18n.t("tabs.search.tabLabel"),
                tabBarIcon: ({color, size}) => {
                    return <IconComponent name={"search"} size={size} color={color}/>;
                }
            }}/>
        </Tabs.Navigator>
    );
}

export default TabNavigator;


