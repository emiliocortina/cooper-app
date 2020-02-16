import React from "react";
import AppNavigator from "cooper-app/App.navigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import { NavigationContainer } from "@react-navigation/native";


const App: React.FC = () =>{
    let theme = useColorScheme();

    return (
        <NavigationContainer>
            <AppearanceProvider>
                <SafeAreaProvider>
                    <AppNavigator theme={theme}/>
                </SafeAreaProvider>
            </AppearanceProvider>
        </NavigationContainer>
    );
}

export default App;
