import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Typography } from "cooper/styles";

class Card extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("cooper/assets/images/sentinel3.jpg")}
        style={styles.CardContainer}
        imageStyle={{ borderRadius: 30 }}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.Content}
        >
          <Text style={styles.Subtitle}>HOLAA</Text>
          <Text style={styles.Title}>HOLAA</Text>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  CardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 40,
    height: 250,
    width: 250,
    shadowColor: "rgba(58,55,55,0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 3,
    marginHorizontal: 10
  },
  Content: {
    width: "100%",
    padding: 20,
    borderRadius: 30,
  },
  Subtitle: {
    ...Colors.secondaryLabelContrast
  },
  Title: {
    ...Typography.h3,
    ...Colors.labelContrast
  }
});

export default Card;
