import React from 'react';
import {View, Text} from 'react-native';
import i18n from '../../../i18n'

class SearchTemplate extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{i18n.t('tabs.search.name')}</Text>
      </View>
    );
  }
}

export default SearchTemplate;
