import React from "react";
import { createMaterialTopTabNavigator, MaterialTopTabBarOptions } from '@react-navigation/material-top-tabs';
import useColorsSheet from "../../../services/useColorsSheet.service";
import TemperaturesScreen from "./Categories/Temperatures/Temperatures.Screen";
import PollutionScreen from "./Categories/NO2/Pollution.Screen";
import RainScreen from "./Categories/Rain/Rain.Screen";
import VegetationScreen from "./Categories/Vegetation/Vegetation.Screen";
import { createBottomTabNavigator, BottomTabBarOptions } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const StatsScreen: React.FC = () => {

    let Colors = useColorsSheet();

    let floatingTabBar = {
        position: "absolute",
        left: 70,
        bottom: 0,
        right: 70,
        marginBottom: 26,
        height: 60,
        paddingBottom: 0,
    };

    const barOptions: BottomTabBarOptions = {
        activeTintColor: "#e06075",
        inactiveTintColor: "#8F9091",
        showLabel: false,
        safeAreaInset: { bottom: "never", top: "never" },
        //@ts-ignore
        style: {
            ...Colors.tabBarBackground,
            ...floatingTabBar,
            shadowColor: "rgba(58,55,55,0.29)",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 15,
            elevation: 3,
            borderTopColor: "transparent",
            borderRadius: 2000
        }
    }

    return (
        <>
            <Tab.Navigator tabBarOptions={barOptions} >
                <Tab.Screen name='Temperatures' key='Temperatures' component={TemperaturesScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <FontAwesome name={"thermometer-three-quarters"} size={size} color={color} />;
                        }
                    }} />
                <Tab.Screen name='Pollution' key='Pollution' component={PollutionScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <FontAwesome name={"cloud"} size={size} color={color} />;
                        }
                    }} />
                <Tab.Screen name='Rain' key='Rain' component={RainScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <FontAwesome name={"tint"} size={size} color={color} />;
                        }
                    }} />
                <Tab.Screen name='Vegetation' key='Vegetation' component={VegetationScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            return <FontAwesome name={"leaf"} size={size} color={color} />;
                        }
                    }} />

            </Tab.Navigator>
        </>
    );
}


export default StatsScreen;
