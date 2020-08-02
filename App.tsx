import React, { useEffect, useState } from "react";
import AppNavigator from "./app/App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native";
import { LocationService } from "./app/services/location.service";
import { AppLoading } from "expo";


const App: React.FC = () => {
    let theme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        background: {
            backgroundColor: '#000',
        }
    });

    let [locationLoaded, setLoadedLocation] = useState(false);
    useEffect(() => {
        if (!locationLoaded) {
            LocationService.getCurrentLocation().then((currentLocation) => {
                if (currentLocation) {
                    setLoadedLocation(true);
                }
            });
        }
    })

    return (
        <NavigationContainer>
            <AppearanceProvider>
                <SafeAreaProvider>
                    <View style={[styles.container, styles.background]}>
                        <StatusBar barStyle="light-content" />
                        {
                            locationLoaded ?
                                <AppNavigator theme={theme} /> :
                                <AppLoading />
                        }

                    </View>

                </SafeAreaProvider>
            </AppearanceProvider>
        </NavigationContainer>
    );
}

export default App;
