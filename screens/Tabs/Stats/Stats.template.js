import React from "react";
import { View, Text, ImageBackground } from "react-native";
import i18n from '../../../i18n';
import statsStyles from './Stats.stylesheet';

const StatsTemplate = () => {
    return (
      <View
        style={statsStyles.Content}
      >
        <Text>{i18n.t('tabs.stats.name')}</Text>
      </View>
    );
}

export default StatsTemplate;
