import React from "react";
import { View, Text, ImageBackground } from "react-native";

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
        <Text>Statistics Screen</Text>
      </ImageBackground>
    );
  }
}

export default StatsTemplate;
