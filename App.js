import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './App.navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyAwesomeApp = createAppContainer(AppNavigator);

export default function App() {
    return (
        <SafeAreaProvider>
            <MyAwesomeApp />
        </SafeAreaProvider>
    );
}
