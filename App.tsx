import React from "react";
import AppNavigator from "cooper-app/App.navigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {NavigationNativeContainer} from '@react-navigation/native';


export default function App() {
    let theme = useColorScheme();

    return (
        <NavigationNativeContainer>
            <AppearanceProvider>
                <SafeAreaProvider>
                    <AppNavigator theme={theme}/>
                </SafeAreaProvider>
            </AppearanceProvider>
        </NavigationNativeContainer>
    );
}
