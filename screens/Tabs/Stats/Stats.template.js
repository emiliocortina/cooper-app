import React from "react";
import { View, Text, ImageBackground } from "react-native";
import i18n from '../../../i18n';

class StatsTemplate extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("cooper/assets/images/sentinel3.jpg")}
        style={{
          flex: 1,
            width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{i18n.t('tabs.stats.name')}</Text>
      </ImageBackground>
    );
  }
}

export default StatsTemplate;
