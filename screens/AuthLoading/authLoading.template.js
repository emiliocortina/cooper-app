import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import firebase from "../../Firebase";

class AuthLoadingTemplate extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if(user) {
        this.props.navigation.navigate('Home', {currentUser: user});
      } else {
        this.props.navigation.navigate('Home', {currentUser: null});
      }
    });
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingTemplate;