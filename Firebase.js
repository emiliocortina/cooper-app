import * as firebase from 'firebase';
import { AsyncStorage } from 'react-native';

const config = {
    apiKey: "AIzaSyA7OAZdjFHmc5hPe1w_LnUHnragbbUt_ro",
    authDomain: "cooper-3bac0.firebaseapp.com",
    databaseURL: "https://cooper-3bac0.firebaseio.com",
    projectId: "cooper-3bac0",
    storageBucket: "cooper-3bac0.appspot.com",
    messagingSenderId: "513149183894",
    appId: "1:513149183894:web:bab585fc89f64730635fb7",
    measurementId: "G-XH22H6JDXX"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(async (user) => {
    if(user) {
        await AsyncStorage.setItem('userUid', user.uid);
    } else {
        await AsyncStorage.setItem('userUid', null);
    }
});

export default firebase;

