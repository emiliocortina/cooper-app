import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import firebase from "../../Firebase";

const AuthLoadingTemplate = ({ navigation }) => {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
}

export default AuthLoadingTemplate;
