import React from 'react';
import {View, Text} from 'react-native';

class Detailstemplate extends React.Component {
  static navigationOptions = {
    title: 'Details',
    tabBarVisible: false,
    gestureResponseDistance: {horizontal: 600, vertical: 1200},
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default Detailstemplate;
