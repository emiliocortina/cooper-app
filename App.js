import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './App.navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as  firebase from 'firebase';

const Cooper = createAppContainer(AppNavigator);

//Initializing firebase
const firebaseConfig = {
    apiKey: "<YOUR-API-KEY>",
    authDomain: "<YOUR-AUTH-DOMAIN>",
    databaseURL: "<YOUR-DATABASE-URL>",
    storageBucket: "<YOUR-STORAGE-BUCKET>"
  };
  
//firebase.initializeApp(firebaseConfig);

export default function App() {
    return (
        <SafeAreaProvider>
            <Cooper />
        </SafeAreaProvider>
    );
}
