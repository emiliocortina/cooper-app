import React from "react";
import AppNavigator from "./app/App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native";


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

    return (
        <NavigationContainer>
            <AppearanceProvider>
                <SafeAreaProvider>
                    <View style={[styles.container, styles.background]}>
                        <StatusBar barStyle="light-content" />
                        <AppNavigator theme={theme} />
                    </View>

                </SafeAreaProvider>
            </AppearanceProvider>
        </NavigationContainer>
    );
}

export default App;
