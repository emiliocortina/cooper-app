import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SafeAreaView from "react-native-safe-area-view";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import statsStyles from "./Stats.stylesheet";
import useColorsSheet from "../../../services/useColorsSheet.service";
import StatsDetailsScreen from "./StatsDetails/StatsDetails.screen";

const Tab = createMaterialTopTabNavigator();

const StatsScreen: React.FC = () => {

    let Colors = useColorsSheet();

    const TabCategories = ['Featured', 'Pollution', 'Temperatures', 'Rain', 'Tides'];
    const Tabs = TabCategories.map((cat) => <Tab.Screen name={cat} key={cat} component={StatsDetailsScreen} />)

    const options = {
        activeTintColor: '#DE6176',
        inactiveTintColor: Colors.secondaryLabel.color,
        tabStyle: {
            width: 140
        },
        indicatorStyle: {
            backgroundColor: '#DE6176',
        },
        scrollEnabled: true,
        style: {
            ...Colors.systemBackground,
            display: 'none',
            shadowColor: "rgba(58,55,55,0.07)",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 8,
        }
    }

    return (
        <>
            <Tab.Navigator tabBarOptions={options} >
                {Tabs}
            </Tab.Navigator>
        </>
    );
}


export default StatsScreen;
