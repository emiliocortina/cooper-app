import React from 'react';
import {Button, View, Text} from 'react-native';
import Card from '../../../components/card';

class HomeTemplate extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Card />
      </View>
    );
  }
}

export default HomeTemplate;
