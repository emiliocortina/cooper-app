import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useColorsSheet from "../../../services/useColorsSheet.service";
import TemperaturesScreen from "./Categories/Temperatures/Temperatures.Screen";
import PollutionScreen from "./Categories/NO2/Pollution.Screen";
import RainScreen from "./Categories/Rain/Rain.Screen";
import VegetationScreen from "./Categories/Vegetation/Vegetation.Screen";

const Tab = createMaterialTopTabNavigator();

const StatsScreen: React.FC = () => {

    let Colors = useColorsSheet();

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
                <Tab.Screen name='Temperatures' key='Temperatures' component={TemperaturesScreen} />
                <Tab.Screen name='Pollution' key='Pollution' component={PollutionScreen} />
                <Tab.Screen name='Rain' key='Rain' component={RainScreen} />
                <Tab.Screen name='Vegetation' key='Vegetation' component={VegetationScreen} />

            </Tab.Navigator>
        </>
    );
}


export default StatsScreen;
