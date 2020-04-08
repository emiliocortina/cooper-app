import React from "react";
import { useFonts } from '@use-expo/font';
import TabNavigator from "./screens/Tabs/Tabs.navigator";
import ThreadDetailsScreen from "./screens/ThreadDetails/ThreadDetails.screen";
import ProfileNavigator from './screens/Profile/ProfileNavigator';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import StatsScreen from "./screens/Tabs/Stats/Stats.screen";
import LoadingScreen from "./screens/Loading/Loading.screen";
import { View } from "react-native";


const pageSheetOptions = {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS
}

const Stack = createStackNavigator();

const MainAppNavigator: React.FC<{ theme: any }> = () => {

    let [fontsLoaded] = useFonts({
        'Circular': require('cooper-app/assets/fonts/CircularStd-Black.otf'),
    });



    return (
        <>
            {
                fontsLoaded ? (
                    <Stack.Navigator mode="modal" headerMode="none" >
                        <Stack.Screen name="Tabs" component={StatsScreen} />
                        {/* <Stack.Screen name="Thread" component={ThreadDetailsScreen} options={pageSheetOptions} />
                    <Stack.Screen name="Profile" component={ProfileNavigator} options={pageSheetOptions} /> */}
                    </Stack.Navigator >
                ) : (
                        <LoadingScreen />
                    )}
        </>
    );
};

export default MainAppNavigator;
