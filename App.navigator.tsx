import React, {useEffect, useState} from "react";
import TabNavigator from "./screens/Tabs/Tabs.navigator";
import ThreadDetailsScreen from "./screens/ThreadDetails/ThreadDetails.screen";
import ProfileNavigator from './screens/Profile/ProfileNavigator';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {isAuthenticated, isInitialized} from "./services/auth.service";


const pageSheetOptions = {
    gestureEnabled: true,
    cardOverlayEnabled: true,
    ...TransitionPresets.ModalPresentationIOS
}

const Stack = createStackNavigator();

const MainAppNavigator = (theme) => {

    return (
        <Stack.Navigator mode="modal"
                         headerMode="none">
            <Stack.Screen name="Tabs" component={TabNavigator}/>
            <Stack.Screen name="Thread" component={ThreadDetailsScreen} options={pageSheetOptions}/>
            <Stack.Screen name="Profile" component={ProfileNavigator} options={pageSheetOptions}/>
        </Stack.Navigator>
    );
};

export default MainAppNavigator;
