import React from 'react';
import {View, Text, Button, SafeAreaView, ScrollView} from 'react-native';

class Detailstemplate extends React.Component {
  static navigationOptions = {
    title: 'Details',
    tabBarVisible: false,
    gestureResponseDistance: {horizontal: 600, vertical: 1200},
  };
  render() {
    return (
      <SafeAreaView>
        <Text>Details Screen</Text>
      </SafeAreaView>
    );
  }
}

export default Detailstemplate;
