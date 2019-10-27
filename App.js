import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./App.navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const Cooper = createAppContainer(AppNavigator);

export default function App() {
    let theme = useColorScheme();

  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <Cooper theme={theme}/>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
}
